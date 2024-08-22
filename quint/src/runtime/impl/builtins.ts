import { Either, left, mergeInMany, right } from '@sweet-monads/either'
import { QuintError, quintErrorToString } from '../../quintError'
import { Map, is, Set, Range, List } from 'immutable'
import { EvalFunction, isTrue } from './evaluator'
import { Context } from './Context'
import { RuntimeValue, rv } from './runtimeValue'
import { chunk } from 'lodash'
import { expressionToString } from '../../ir/IRprinting'
import { zerog } from '../../idGenerator'
import { QuintApp, QuintEx } from '../../ir/quintIr'

export function builtinValue(name: string): Either<QuintError, RuntimeValue> {
  switch (name) {
    case 'Bool':
      return right(rv.mkSet([rv.mkBool(false), rv.mkBool(true)]))
    case 'Int':
      return right(rv.mkInfSet('Int'))
    case 'Nat':
      return right(rv.mkInfSet('Nat'))
    default:
      return left({ code: 'QNT404', message: `Unknown builtin ${name}` })
  }
}

export const lazyOps = [
  'assign',
  'actionAny',
  'actionAll',
  'ite',
  'matchVariant',
  'oneOf',
  'and',
  'or',
  'next',
  'implies',
  'then',
]

export function lazyBuiltinLambda(
  op: string
): (ctx: Context, args: EvalFunction[]) => Either<QuintError, RuntimeValue> {
  switch (op) {
    case 'and':
      return (ctx, args) => {
        return args.reduce((acc: Either<QuintError, RuntimeValue>, arg: EvalFunction) => {
          return acc.chain(accValue => {
            if (accValue.toBool() === true) {
              return arg(ctx)
            }
            return acc
          })
        }, right(rv.mkBool(true)))
      }
    case 'or':
      return (ctx, args) => {
        return args.reduce((acc: Either<QuintError, RuntimeValue>, arg: EvalFunction) => {
          return acc.chain(accValue => {
            if (accValue.toBool() === false) {
              return arg(ctx)
            }
            return acc
          })
        }, right(rv.mkBool(false)))
      }

    case 'implies':
      return (ctx, args) => {
        return args[0](ctx).chain(l => {
          if (!l.toBool()) {
            return right(rv.mkBool(true))
          }

          return args[1](ctx)
        })
      }

    case 'actionAny':
      const app: QuintApp = { id: 0n, kind: 'app', opcode: 'actionAny', args: [] }
      return (ctx, args) => {
        const nextVarsSnapshot = ctx.varStorage.nextVarsSnapshot()
        const evaluationResults = args.map((arg, i) => {
          ctx.recorder.onAnyOptionCall(app, i)
          const result = arg(ctx).map(result => {
            // Save vars
            const successor = ctx.varStorage.nextVarsSnapshot()

            return result.toBool() ? [successor] : []
          })
          ctx.recorder.onAnyOptionReturn(app, i)

          // Recover snapshot (regardless of success or failure)
          ctx.varStorage.recoverNextVars(nextVarsSnapshot)

          return result
        })

        const processedResults = mergeInMany(evaluationResults)
          .map(suc => suc.flat())
          .mapLeft(errors => errors[0])

        return processedResults.map(potentialSuccessors => {
          ctx.recorder.onAnyReturn(args.length, -1)

          switch (potentialSuccessors.length) {
            case 0:
              return rv.mkBool(false)
            case 1:
              ctx.varStorage.recoverNextVars(potentialSuccessors[0])
              return rv.mkBool(true)
            default:
              const choice = Number(ctx.rand(BigInt(potentialSuccessors.length)))
              ctx.varStorage.recoverNextVars(potentialSuccessors[choice])
              return rv.mkBool(true)
          }
        })
      }
    case 'actionAll':
      return (ctx, args) => {
        const nextVarsSnapshot = ctx.varStorage.nextVarsSnapshot()
        for (const action of args) {
          const result = action(ctx)
          if (!isTrue(result)) {
            ctx.varStorage.recoverNextVars(nextVarsSnapshot)
            return result.map(_ => rv.mkBool(false))
          }
        }

        return right(rv.mkBool(true))
      }
    case 'ite':
      return (ctx, args) => {
        return args[0](ctx).chain(condition => {
          return condition.toBool() ? args[1](ctx) : args[2](ctx)
        })
      }

    case 'matchVariant':
      return (ctx, args) => {
        const matchedEx = args[0]
        return matchedEx(ctx).chain(expr => {
          const [label, value] = expr.toVariant()

          const cases = args.slice(1)

          const caseForVariant = chunk(cases, 2).find(([caseLabel, _caseElim]) => {
            const l = caseLabel(ctx).unwrap().toStr()
            return l === '_' || l === label
          })

          if (!caseForVariant) {
            return left({ code: 'QNT505', message: `No match for variant ${label}` })
          }

          const [_caseLabel, caseElim] = caseForVariant
          return caseElim(ctx).chain(elim => elim.toArrow()(ctx, [value]))
        })
      }

    case 'oneOf':
      return (ctx, args) => {
        return args[0](ctx).chain(set => {
          const bounds = set.bounds()
          const positions: Either<QuintError, bigint[]> = mergeInMany(
            bounds.map((b): Either<QuintError, bigint> => {
              if (b.isJust()) {
                const sz = b.value

                if (sz === 0n) {
                  return left({ code: 'QNT509', message: `Applied oneOf to an empty set` })
                }
                return right(ctx.rand(sz))
              } else {
                // An infinite set, pick an integer from the range [-2^255, 2^255).
                // Note that pick on Nat uses the absolute value of the passed integer.
                // TODO: make it a configurable parameter:
                // https://github.com/informalsystems/quint/issues/279
                return right(-(2n ** 255n) + ctx.rand(2n ** 256n))
              }
            })
          ).mapLeft(errors => errors[0])

          return positions.chain(ps => set.pick(ps.values()))
        })
      }
    case 'then':
      return (ctx, args) => {
        // const oldState = ctx.varStorage.asRecord()
        return args[0](ctx).chain(firstResult => {
          if (!firstResult.toBool()) {
            return left({
              code: 'QNT513',
              message: `Cannot continue in A.then(B), A evaluates to 'false'`,
            })
          }

          ctx.shift()
          // const newState = ctx.varStorage.asRecord()
          // ctx.recorder.onNextState(oldState, newState)

          return args[1](ctx)
        })
      }

    default:
      return () => left({ code: 'QNT000', message: 'Unknown stateful op' })
  }
}

export function builtinLambda(op: string): (ctx: Context, args: RuntimeValue[]) => Either<QuintError, RuntimeValue> {
  switch (op) {
    case 'Set':
      return (_, args) => right(rv.mkSet(args))
    case 'Rec':
      return (_, args) => right(rv.mkRecord(Map(chunk(args, 2).map(([k, v]) => [k.toStr(), v]))))
    case 'List':
      return (_, args) => right(rv.mkList(List(args)))
    case 'Tup':
      return (_, args) => right(rv.mkTuple(List(args)))
    case 'Map':
      return (_, args) => right(rv.mkMap(args.map(kv => kv.toTuple2())))
    case 'variant':
      return (_, args) => right(rv.mkVariant(args[0].toStr(), args[1]))
    case 'not':
      return (_, args) => right(rv.mkBool(!args[0].toBool()))
    case 'iff':
      return (_, args) => right(rv.mkBool(args[0].toBool() === args[1].toBool()))
    case 'eq':
      return (_, args) => right(rv.mkBool(args[0].equals(args[1])))
    case 'neq':
      return (_, args) => right(rv.mkBool(!args[0].equals(args[1])))
    case 'iadd':
      return (_, args) => right(rv.mkInt(args[0].toInt() + args[1].toInt()))
    case 'isub':
      return (_, args) => right(rv.mkInt(args[0].toInt() - args[1].toInt()))
    case 'imul':
      return (_, args) => right(rv.mkInt(args[0].toInt() * args[1].toInt()))
    case 'idiv':
      return (_, args) => {
        const divisor = args[1].toInt()
        if (divisor === 0n) {
          return left({ code: 'QNT503', message: `Division by zero` })
        }
        return right(rv.mkInt(args[0].toInt() / divisor))
      }
    case 'imod':
      return (_, args) => right(rv.mkInt(args[0].toInt() % args[1].toInt()))
    case 'ipow':
      return (_, args) => {
        const base = args[0].toInt()
        const exp = args[1].toInt()
        if (base === 0n && exp === 0n) {
          return left({ code: 'QNT503', message: `0^0 is undefined` })
        }
        if (exp < 0n) {
          return left({ code: 'QNT503', message: 'i^j is undefined for j < 0' })
        }

        return right(rv.mkInt(base ** exp))
      }
    case 'iuminus':
      return (_, args) => right(rv.mkInt(-args[0].toInt()))
    case 'ilt':
      return (_, args) => right(rv.mkBool(args[0].toInt() < args[1].toInt()))
    case 'ilte':
      return (_, args) => right(rv.mkBool(args[0].toInt() <= args[1].toInt()))
    case 'igt':
      return (_, args) => right(rv.mkBool(args[0].toInt() > args[1].toInt()))
    case 'igte':
      return (_, args) => right(rv.mkBool(args[0].toInt() >= args[1].toInt()))

    case 'item':
      return (_, args) => {
        // Access a tuple: tuples are 1-indexed, that is, _1, _2, etc.
        return getListElem(args[0].toList(), Number(args[1].toInt()) - 1)
      }
    case 'tuples':
      return (_, args) => right(rv.mkCrossProd(args))

    case 'range':
      return (_, args) => {
        const start = Number(args[0].toInt())
        const end = Number(args[1].toInt())
        return right(rv.mkList(List(Range(start, end).map(rv.mkInt))))
      }

    case 'nth':
      return (_, args) => getListElem(args[0].toList(), Number(args[1].toInt()))

    case 'replaceAt':
      return (_, args) => {
        const list = args[0].toList()
        const idx = Number(args[1].toInt())
        if (idx < 0 || idx >= list.size) {
          return left({ code: 'QNT510', message: `Out of bounds, replaceAt(${idx})` })
        }

        return right(rv.mkList(list.set(idx, args[2])))
      }

    case 'head':
      return (_, args) => {
        const list = args[0].toList()
        if (list.size === 0) {
          return left({ code: 'QNT505', message: `Called 'head' on an empty list` })
        }
        return right(list.first()!)
      }

    case 'tail':
      return (_, args) => {
        const list = args[0].toList()
        if (list.size === 0) {
          return left({ code: 'QNT505', message: `Called 'tail' on an empty list` })
        }
        return right(rv.mkList(list.rest()))
      }

    case 'slice':
      return (_, args) => {
        const list = args[0].toList()
        const start = Number(args[1].toInt())
        const end = Number(args[2].toInt())
        if (start < 0 || start > end || end > list.size) {
          return left({
            code: 'QNT506',
            message: `slice(..., ${start}, ${end}) applied to a list of size ${list.size}`,
          })
        }

        return right(rv.mkList(list.slice(start, end)))
      }

    case 'length':
      return (_, args) => right(rv.mkInt(args[0].toList().size))
    case 'append':
      return (_, args) => right(rv.mkList(args[0].toList().push(args[1])))
    case 'concat':
      return (_, args) => right(rv.mkList(args[0].toList().concat(args[1].toList())))
    case 'indices':
      return (_, args) => right(rv.mkInterval(0n, args[0].toList().size - 1))

    case 'field':
      return (_, args) => {
        const field = args[1].toStr()
        const result = args[0].toOrderedMap().get(field)
        return result ? right(result) : left({ code: 'QNT501', message: `Accessing a missing record field ${field}` })
      }

    case 'fieldNames':
      return (_, args) => right(rv.mkSet(args[0].toOrderedMap().keySeq().map(rv.mkStr)))

    case 'with':
      return (_, args) => {
        const record = args[0].toOrderedMap()
        const field = args[1].toStr()
        const value = args[2]

        if (!record.has(field)) {
          return left({ code: 'QNT501', message: `Called 'with' with a non-existent field ${field}` })
        }

        return right(rv.mkRecord(record.set(field, value)))
      }

    case 'powerset':
      return (_, args) => right(rv.mkPowerset(args[0]))
    case 'contains':
      return (_, args) => right(rv.mkBool(args[0].contains(args[1])))
    case 'in':
      return (_, args) => right(rv.mkBool(args[1].contains(args[0])))
    case 'subseteq':
      return (_, args) => right(rv.mkBool(args[0].isSubset(args[1])))
    case 'exclude':
      return (_, args) => right(rv.mkSet(args[0].toSet().subtract(args[1].toSet())))
    case 'union':
      return (_, args) => right(rv.mkSet(args[0].toSet().union(args[1].toSet())))
    case 'intersect':
      return (_, args) => right(rv.mkSet(args[0].toSet().intersect(args[1].toSet())))
    case 'size':
      return (_, args) => args[0].cardinality().map(rv.mkInt)
    case 'isFinite':
      // at the moment, we support only finite sets, so just return true
      return _args => right(rv.mkBool(true))

    case 'to':
      return (_, args) => right(rv.mkInterval(args[0].toInt(), args[1].toInt()))
    case 'fold':
      return (ctx, args) => applyFold('fwd', args[0].toSet(), args[1], arg => args[2].toArrow()(ctx, arg))
    case 'foldl':
      return (ctx, args) => applyFold('fwd', args[0].toList(), args[1], arg => args[2].toArrow()(ctx, arg))
    case 'foldr':
      return (ctx, args) => applyFold('rev', args[0].toList(), args[1], arg => args[2].toArrow()(ctx, arg))

    case 'flatten':
      return (_, args) => {
        const s = args[0].toSet().map(s => s.toSet())
        return right(rv.mkSet(s.flatten(1) as Set<RuntimeValue>))
      }

    case 'get':
      return (_, args) => {
        const map = args[0].toMap()
        const key = args[1].normalForm()
        const value = map.get(key)
        return value
          ? right(value)
          : left({
              code: 'QNT507',
              message: `Called 'get' with a non-existing key. Key is ${expressionToString(
                key.toQuintEx(zerog)
              )}. Map has keys: ${map
                .toMap()
                .keySeq()
                .map(k => expressionToString(k.toQuintEx(zerog)))
                .join(', ')}`,
            })
      }

    case 'set':
      return (_, args) => {
        const map = args[0].toMap()
        const key = args[1].normalForm()
        if (!map.has(key)) {
          return left({ code: 'QNT507', message: "Called 'set' with a non-existing key" })
        }
        const value = args[2]
        return right(rv.fromMap(map.set(key, value)))
      }

    case 'put':
      return (_, args) => {
        const map = args[0].toMap()
        const key = args[1].normalForm()
        const value = args[2]
        return right(rv.fromMap(map.set(key, value)))
      }

    case 'setBy':
      return (ctx, args) => {
        const map = args[0].toMap()
        const key = args[1].normalForm()
        if (!map.has(key)) {
          return left({ code: 'QNT507', message: `Called 'setBy' with a non-existing key ${key}` })
        }

        const value = map.get(key)!
        const lam = args[2].toArrow()
        return lam(ctx, [value]).map(v => rv.fromMap(map.set(key, v)))
      }

    case 'keys':
      return (_, args) => right(rv.mkSet(args[0].toMap().keys()))

    case 'exists':
      return (ctx, args) =>
        applyLambdaToSet(ctx, args[1], args[0]).map(values => rv.mkBool(values.some(v => v.toBool()) === true))

    case 'forall':
      return (ctx, args) =>
        applyLambdaToSet(ctx, args[1], args[0]).map(values => rv.mkBool(values.every(v => v.toBool()) === true))

    case 'map':
      return (ctx, args) => {
        return applyLambdaToSet(ctx, args[1], args[0]).map(values => rv.mkSet(values))
      }

    case 'filter':
      return (ctx, args) => {
        const set = args[0].toSet()
        const lam = args[1].toArrow()
        const reducer = ([acc, arg]: RuntimeValue[]) =>
          lam(ctx, [arg]).map(condition =>
            condition.toBool() === true ? rv.mkSet(acc.toSet().add(arg.normalForm())) : acc
          )

        return applyFold('fwd', set, rv.mkSet([]), reducer)
      }

    case 'select':
      return (ctx, args) => {
        const list = args[0].toList()
        const lam = args[1].toArrow()
        const reducer = ([acc, arg]: RuntimeValue[]) =>
          lam(ctx, [arg]).map(condition => (condition.toBool() === true ? rv.mkList(acc.toList().push(arg)) : acc))

        return applyFold('fwd', list, rv.mkList([]), reducer)
      }

    case 'mapBy':
      return (ctx, args) => {
        const lambda = args[1].toArrow()
        const keys = args[0].toSet()
        const reducer = ([acc, arg]: RuntimeValue[]) =>
          lambda(ctx, [arg]).map(value => rv.fromMap(acc.toMap().set(arg.normalForm(), value)))

        return applyFold('fwd', keys, rv.mkMap([]), reducer)
      }

    case 'setToMap':
      return (_, args) => {
        const set = args[0].toSet()
        return right(rv.mkMap(Map(set.map(s => s.toTuple2()))))
      }

    case 'setOfMaps':
      return (_, args) => right(rv.mkMapSet(args[0], args[1]))

    case 'fail':
      return (_, args) => right(rv.mkBool(!args[0].toBool()))
    case 'assert':
      return (_, args) => (args[0].toBool() ? right(args[0]) : left({ code: 'QNT502', message: `Assertion failed` }))
    case 'expect':
    case 'reps':

    default:
      return () => left({ code: 'QNT000', message: `Unknown builtin ${op}` })
  }
}
export function applyLambdaToSet(
  ctx: Context,
  lambda: RuntimeValue,
  set: RuntimeValue
): Either<QuintError, Set<RuntimeValue>> {
  const f = lambda.toArrow()
  const results = set.toSet().map(value => f(ctx, [value]))
  const err = results.find(result => result.isLeft())
  if (err !== undefined && err.isLeft()) {
    return left(err.value)
  }

  return right(
    results.map(result => {
      if (result.isLeft()) {
        throw new Error(`Impossible, result is left: ${quintErrorToString(result.value)}`)
      }

      return result.value
    })
  )
}

function applyFold(
  order: 'fwd' | 'rev',
  iterable: Iterable<RuntimeValue>,
  initial: RuntimeValue,
  lambda: (args: RuntimeValue[]) => Either<QuintError, RuntimeValue>
): Either<QuintError, RuntimeValue> {
  const reducer = (acc: Either<QuintError, RuntimeValue>, val: RuntimeValue) => {
    return acc.chain(accValue => {
      if (order === 'fwd') {
        return lambda([accValue, val])
      } else {
        return lambda([val, accValue])
      }
    })
  }

  const array = Array.from(iterable)
  if (order === 'fwd') {
    return array.reduce(reducer, right(initial))
  } else {
    return array.reduceRight(reducer, right(initial))
  }
}

// Access a list via an index
function getListElem(list: List<RuntimeValue>, idx: number): Either<QuintError, RuntimeValue> {
  if (idx >= 0n && idx < list.size) {
    const elem = list.get(Number(idx))
    if (elem) {
      return right(elem)
    }
  }

  return left({ code: 'QNT510', message: `Out of bounds, nth(${idx})` })
}
