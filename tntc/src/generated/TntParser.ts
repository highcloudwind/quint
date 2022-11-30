// Generated from ./src/generated/Tnt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TntListener } from "./TntListener";
import { TntVisitor } from "./TntVisitor";


export class TntParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly STRING = 35;
	public static readonly BOOL = 36;
	public static readonly INT = 37;
	public static readonly AND = 38;
	public static readonly OR = 39;
	public static readonly IFF = 40;
	public static readonly IMPLIES = 41;
	public static readonly SET = 42;
	public static readonly LIST = 43;
	public static readonly MAP = 44;
	public static readonly MATCH = 45;
	public static readonly PLUS = 46;
	public static readonly MINUS = 47;
	public static readonly MUL = 48;
	public static readonly DIV = 49;
	public static readonly MOD = 50;
	public static readonly GT = 51;
	public static readonly LT = 52;
	public static readonly GE = 53;
	public static readonly LE = 54;
	public static readonly NE = 55;
	public static readonly EQ = 56;
	public static readonly ASGN = 57;
	public static readonly LPAREN = 58;
	public static readonly RPAREN = 59;
	public static readonly IDENTIFIER = 60;
	public static readonly SIMPLE_IDENTIFIER = 61;
	public static readonly LINE_COMMENT = 62;
	public static readonly COMMENT = 63;
	public static readonly WS = 64;
	public static readonly IN = 65;
	public static readonly NOTIN = 66;
	public static readonly RULE_module = 0;
	public static readonly RULE_unit = 1;
	public static readonly RULE_operDef = 2;
	public static readonly RULE_qualifier = 3;
	public static readonly RULE_params = 4;
	public static readonly RULE_instanceMod = 5;
	public static readonly RULE_type = 6;
	public static readonly RULE_typeUnionRecOne = 7;
	public static readonly RULE_row = 8;
	public static readonly RULE_expr = 9;
	public static readonly RULE_unitOrExpr = 10;
	public static readonly RULE_lambda = 11;
	public static readonly RULE_identOrHole = 12;
	public static readonly RULE_identOrStar = 13;
	public static readonly RULE_path = 14;
	public static readonly RULE_argList = 15;
	public static readonly RULE_normalCallName = 16;
	public static readonly RULE_nameAfterDot = 17;
	public static readonly RULE_operator = 18;
	public static readonly RULE_literal = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"module", "unit", "operDef", "qualifier", "params", "instanceMod", "type", 
		"typeUnionRecOne", "row", "expr", "unitOrExpr", "lambda", "identOrHole", 
		"identOrStar", "path", "argList", "normalCallName", "nameAfterDot", "operator", 
		"literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'module'", "'{'", "'}'", "'const'", "':'", "'var'", "'assume'", 
		"'type'", "'import'", "'.'", "';'", "'val'", "'def'", "'pure'", "'action'", 
		"'run'", "'temporal'", "','", "'->'", "'=>'", "'['", "']'", "'int'", "'str'", 
		"'bool'", "'|'", "'^'", "'''", "'all'", "'any'", "'if'", "'else'", "'nondet'", 
		"'_'", undefined, undefined, undefined, "'and'", "'or'", "'iff'", "'implies'", 
		"'Set'", "'List'", "'Map'", "'match'", "'+'", "'-'", "'*'", "'/'", "'%'", 
		"'>'", "'<'", "'>='", "'<='", "'!='", "'=='", "'='", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"STRING", "BOOL", "INT", "AND", "OR", "IFF", "IMPLIES", "SET", "LIST", 
		"MAP", "MATCH", "PLUS", "MINUS", "MUL", "DIV", "MOD", "GT", "LT", "GE", 
		"LE", "NE", "EQ", "ASGN", "LPAREN", "RPAREN", "IDENTIFIER", "SIMPLE_IDENTIFIER", 
		"LINE_COMMENT", "COMMENT", "WS", "IN", "NOTIN",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TntParser._LITERAL_NAMES, TntParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TntParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Tnt.g4"; }

	// @Override
	public get ruleNames(): string[] { return TntParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TntParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TntParser._ATN, this);
	}
	// @RuleVersion(0)
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TntParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(TntParser.T__0);
			this.state = 41;
			this.match(TntParser.IDENTIFIER);
			this.state = 42;
			this.match(TntParser.T__1);
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__0) | (1 << TntParser.T__3) | (1 << TntParser.T__5) | (1 << TntParser.T__6) | (1 << TntParser.T__7) | (1 << TntParser.T__8) | (1 << TntParser.T__11) | (1 << TntParser.T__12) | (1 << TntParser.T__13) | (1 << TntParser.T__14) | (1 << TntParser.T__15) | (1 << TntParser.T__16))) !== 0)) {
				{
				{
				this.state = 43;
				this.unit();
				}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 49;
			this.match(TntParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TntParser.RULE_unit);
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				_localctx = new ConstContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
				this.match(TntParser.T__3);
				this.state = 52;
				this.match(TntParser.IDENTIFIER);
				this.state = 53;
				this.match(TntParser.T__4);
				this.state = 54;
				this.type(0);
				}
				break;

			case 2:
				_localctx = new VarContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 55;
				this.match(TntParser.T__5);
				this.state = 56;
				this.match(TntParser.IDENTIFIER);
				this.state = 57;
				this.match(TntParser.T__4);
				this.state = 58;
				this.type(0);
				}
				break;

			case 3:
				_localctx = new AssumeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 59;
				this.match(TntParser.T__6);
				this.state = 60;
				this.identOrHole();
				this.state = 61;
				this.match(TntParser.ASGN);
				this.state = 62;
				this.expr(0);
				}
				break;

			case 4:
				_localctx = new OperContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 64;
				this.operDef();
				}
				break;

			case 5:
				_localctx = new ModuleNestedContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 65;
				this.module();
				}
				break;

			case 6:
				_localctx = new InstanceContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 66;
				this.instanceMod();
				}
				break;

			case 7:
				_localctx = new TypedefContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 67;
				this.match(TntParser.T__7);
				this.state = 68;
				this.match(TntParser.IDENTIFIER);
				}
				break;

			case 8:
				_localctx = new TypedefContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 69;
				this.match(TntParser.T__7);
				this.state = 70;
				this.match(TntParser.IDENTIFIER);
				this.state = 71;
				this.match(TntParser.ASGN);
				this.state = 72;
				this.type(0);
				}
				break;

			case 9:
				_localctx = new ImportDefContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 73;
				this.match(TntParser.T__8);
				this.state = 74;
				this.path();
				this.state = 75;
				this.match(TntParser.T__9);
				this.state = 76;
				this.identOrStar();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operDef(): OperDefContext {
		let _localctx: OperDefContext = new OperDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TntParser.RULE_operDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.qualifier();
			this.state = 81;
			this.match(TntParser.IDENTIFIER);
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TntParser.LPAREN) {
				{
				this.state = 82;
				this.params();
				}
			}

			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TntParser.T__4) {
				{
				this.state = 85;
				this.match(TntParser.T__4);
				this.state = 86;
				this.type(0);
				}
			}

			this.state = 89;
			this.match(TntParser.ASGN);
			this.state = 90;
			this.expr(0);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TntParser.T__10) {
				{
				this.state = 91;
				this.match(TntParser.T__10);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifier(): QualifierContext {
		let _localctx: QualifierContext = new QualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TntParser.RULE_qualifier);
		try {
			this.state = 103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.match(TntParser.T__11);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.match(TntParser.T__12);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.match(TntParser.T__13);
				this.state = 97;
				this.match(TntParser.T__11);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 98;
				this.match(TntParser.T__13);
				this.state = 99;
				this.match(TntParser.T__12);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 100;
				this.match(TntParser.T__14);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 101;
				this.match(TntParser.T__15);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 102;
				this.match(TntParser.T__16);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public params(): ParamsContext {
		let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TntParser.RULE_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(TntParser.LPAREN);
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TntParser.IDENTIFIER) {
				{
				this.state = 106;
				this.match(TntParser.IDENTIFIER);
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__17) {
					{
					{
					this.state = 107;
					this.match(TntParser.T__17);
					this.state = 108;
					this.match(TntParser.IDENTIFIER);
					}
					}
					this.state = 113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 116;
			this.match(TntParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instanceMod(): InstanceModContext {
		let _localctx: InstanceModContext = new InstanceModContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TntParser.RULE_instanceMod);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(TntParser.T__0);
			this.state = 119;
			this.match(TntParser.IDENTIFIER);
			this.state = 120;
			this.match(TntParser.ASGN);
			this.state = 121;
			this.match(TntParser.IDENTIFIER);
			this.state = 122;
			this.match(TntParser.LPAREN);
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TntParser.MUL:
				{
				this.state = 123;
				this.match(TntParser.MUL);
				}
				break;
			case TntParser.IDENTIFIER:
				{
				this.state = 124;
				this.match(TntParser.IDENTIFIER);
				this.state = 125;
				this.match(TntParser.ASGN);
				this.state = 126;
				this.expr(0);
				this.state = 133;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 127;
						this.match(TntParser.T__17);
						this.state = 128;
						this.match(TntParser.IDENTIFIER);
						this.state = 129;
						this.match(TntParser.ASGN);
						this.state = 130;
						this.expr(0);
						}
						}
					}
					this.state = 135;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__17) {
					{
					this.state = 136;
					this.match(TntParser.T__17);
					this.state = 137;
					this.match(TntParser.MUL);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 142;
			this.match(TntParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, TntParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				_localctx = new TypeOperContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 145;
				this.match(TntParser.LPAREN);
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__1) | (1 << TntParser.T__22) | (1 << TntParser.T__23) | (1 << TntParser.T__24) | (1 << TntParser.T__25))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (TntParser.SET - 42)) | (1 << (TntParser.LIST - 42)) | (1 << (TntParser.LPAREN - 42)) | (1 << (TntParser.IDENTIFIER - 42)))) !== 0)) {
					{
					this.state = 146;
					this.type(0);
					this.state = 151;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 147;
							this.match(TntParser.T__17);
							this.state = 148;
							this.type(0);
							}
							}
						}
						this.state = 153;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
					}
					}
				}

				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__17) {
					{
					this.state = 156;
					this.match(TntParser.T__17);
					}
				}

				this.state = 159;
				this.match(TntParser.RPAREN);
				this.state = 160;
				this.match(TntParser.T__19);
				this.state = 161;
				this.type(11);
				}
				break;

			case 2:
				{
				_localctx = new TypeSetContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				this.match(TntParser.SET);
				this.state = 163;
				this.match(TntParser.T__20);
				this.state = 164;
				this.type(0);
				this.state = 165;
				this.match(TntParser.T__21);
				}
				break;

			case 3:
				{
				_localctx = new TypeListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 167;
				this.match(TntParser.LIST);
				this.state = 168;
				this.match(TntParser.T__20);
				this.state = 169;
				this.type(0);
				this.state = 170;
				this.match(TntParser.T__21);
				}
				break;

			case 4:
				{
				_localctx = new TypeTupleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 172;
				this.match(TntParser.LPAREN);
				this.state = 173;
				this.type(0);
				this.state = 174;
				this.match(TntParser.T__17);
				this.state = 175;
				this.type(0);
				this.state = 180;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 176;
						this.match(TntParser.T__17);
						this.state = 177;
						this.type(0);
						}
						}
					}
					this.state = 182;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__17) {
					{
					this.state = 183;
					this.match(TntParser.T__17);
					}
				}

				this.state = 186;
				this.match(TntParser.RPAREN);
				}
				break;

			case 5:
				{
				_localctx = new TypeRecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 188;
				this.match(TntParser.T__1);
				this.state = 189;
				this.row();
				this.state = 190;
				this.match(TntParser.T__2);
				}
				break;

			case 6:
				{
				_localctx = new TypeUnionRecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 193;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 192;
						this.typeUnionRecOne();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 195;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 7:
				{
				_localctx = new TypeIntContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 197;
				this.match(TntParser.T__22);
				}
				break;

			case 8:
				{
				_localctx = new TypeStrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 198;
				this.match(TntParser.T__23);
				}
				break;

			case 9:
				{
				_localctx = new TypeBoolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 199;
				this.match(TntParser.T__24);
				}
				break;

			case 10:
				{
				_localctx = new TypeConstOrVarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 200;
				this.match(TntParser.IDENTIFIER);
				}
				break;

			case 11:
				{
				_localctx = new TypeParenContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 201;
				this.match(TntParser.LPAREN);
				this.state = 202;
				this.type(0);
				this.state = 203;
				this.match(TntParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 212;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeFunContext(new TypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_type);
					this.state = 207;
					if (!(this.precpred(this._ctx, 12))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
					}
					this.state = 208;
					this.match(TntParser.T__18);
					this.state = 209;
					this.type(12);
					}
					}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeUnionRecOne(): TypeUnionRecOneContext {
		let _localctx: TypeUnionRecOneContext = new TypeUnionRecOneContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TntParser.RULE_typeUnionRecOne);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.match(TntParser.T__25);
			this.state = 216;
			this.match(TntParser.T__1);
			this.state = 217;
			this.match(TntParser.IDENTIFIER);
			this.state = 218;
			this.match(TntParser.T__4);
			this.state = 219;
			this.match(TntParser.STRING);
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 220;
				this.match(TntParser.T__17);
				this.state = 221;
				this.row();
				}
				break;
			}
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TntParser.T__17) {
				{
				this.state = 224;
				this.match(TntParser.T__17);
				}
			}

			this.state = 227;
			this.match(TntParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public row(): RowContext {
		let _localctx: RowContext = new RowContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TntParser.RULE_row);
		let _la: number;
		try {
			let _alt: number;
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 237;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 230;
						this.match(TntParser.IDENTIFIER);
						this.state = 231;
						this.match(TntParser.T__4);
						this.state = 232;
						this.type(0);
						this.state = 233;
						this.match(TntParser.T__17);
						}
						}
					}
					this.state = 239;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.IDENTIFIER) {
					{
					{
					this.state = 240;
					this.match(TntParser.IDENTIFIER);
					this.state = 241;
					this.match(TntParser.T__4);
					this.state = 242;
					this.type(0);
					}
					this.state = 247;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						this.state = 244;
						this.match(TntParser.T__17);
						}
						break;

					case 2:
						{
						this.state = 245;
						this.match(TntParser.T__25);
						{
						this.state = 246;
						this.match(TntParser.IDENTIFIER);
						}
						}
						break;
					}
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 251;
				this.match(TntParser.T__25);
				{
				this.state = 252;
				this.match(TntParser.IDENTIFIER);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, TntParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				_localctx = new UminusContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 256;
				this.match(TntParser.MINUS);
				this.state = 257;
				this.expr(30);
				}
				break;

			case 2:
				{
				_localctx = new LambdaConsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 258;
				this.lambda();
				}
				break;

			case 3:
				{
				_localctx = new OperAppContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 259;
				this.normalCallName();
				this.state = 260;
				this.match(TntParser.LPAREN);
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__1) | (1 << TntParser.T__11) | (1 << TntParser.T__12) | (1 << TntParser.T__13) | (1 << TntParser.T__14) | (1 << TntParser.T__15) | (1 << TntParser.T__16) | (1 << TntParser.T__20) | (1 << TntParser.T__28) | (1 << TntParser.T__29) | (1 << TntParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TntParser.T__32 - 33)) | (1 << (TntParser.T__33 - 33)) | (1 << (TntParser.STRING - 33)) | (1 << (TntParser.BOOL - 33)) | (1 << (TntParser.INT - 33)) | (1 << (TntParser.AND - 33)) | (1 << (TntParser.OR - 33)) | (1 << (TntParser.IFF - 33)) | (1 << (TntParser.IMPLIES - 33)) | (1 << (TntParser.SET - 33)) | (1 << (TntParser.LIST - 33)) | (1 << (TntParser.MAP - 33)) | (1 << (TntParser.MINUS - 33)) | (1 << (TntParser.LPAREN - 33)) | (1 << (TntParser.IDENTIFIER - 33)))) !== 0)) {
					{
					this.state = 261;
					this.argList();
					}
				}

				this.state = 264;
				this.match(TntParser.RPAREN);
				}
				break;

			case 4:
				{
				_localctx = new AsgnContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 266;
				this.match(TntParser.IDENTIFIER);
				this.state = 267;
				this.match(TntParser.T__27);
				this.state = 268;
				this.match(TntParser.ASGN);
				this.state = 269;
				this.expr(21);
				}
				break;

			case 5:
				{
				_localctx = new AndExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 270;
				this.match(TntParser.AND);
				this.state = 271;
				this.match(TntParser.T__1);
				this.state = 272;
				this.expr(0);
				this.state = 277;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 273;
						this.match(TntParser.T__17);
						this.state = 274;
						this.expr(0);
						}
						}
					}
					this.state = 279;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__17) {
					{
					this.state = 280;
					this.match(TntParser.T__17);
					}
				}

				this.state = 283;
				this.match(TntParser.T__2);
				}
				break;

			case 6:
				{
				_localctx = new OrExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 285;
				this.match(TntParser.OR);
				this.state = 286;
				this.match(TntParser.T__1);
				this.state = 287;
				this.expr(0);
				this.state = 292;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 288;
						this.match(TntParser.T__17);
						this.state = 289;
						this.expr(0);
						}
						}
					}
					this.state = 294;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__17) {
					{
					this.state = 295;
					this.match(TntParser.T__17);
					}
				}

				this.state = 298;
				this.match(TntParser.T__2);
				}
				break;

			case 7:
				{
				_localctx = new ActionAllContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 300;
				this.match(TntParser.T__28);
				this.state = 301;
				this.match(TntParser.T__1);
				this.state = 302;
				this.expr(0);
				this.state = 307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 303;
						this.match(TntParser.T__17);
						this.state = 304;
						this.expr(0);
						}
						}
					}
					this.state = 309;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__17) {
					{
					this.state = 310;
					this.match(TntParser.T__17);
					}
				}

				this.state = 313;
				this.match(TntParser.T__2);
				}
				break;

			case 8:
				{
				_localctx = new ActionAnyContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 315;
				this.match(TntParser.T__29);
				this.state = 316;
				this.match(TntParser.T__1);
				this.state = 317;
				this.expr(0);
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 318;
						this.match(TntParser.T__17);
						this.state = 319;
						this.expr(0);
						}
						}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				}
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__17) {
					{
					this.state = 325;
					this.match(TntParser.T__17);
					}
				}

				this.state = 328;
				this.match(TntParser.T__2);
				}
				break;

			case 9:
				{
				_localctx = new LiteralOrIdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 330;
				_la = this._input.LA(1);
				if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (TntParser.STRING - 35)) | (1 << (TntParser.BOOL - 35)) | (1 << (TntParser.INT - 35)) | (1 << (TntParser.IDENTIFIER - 35)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 10:
				{
				_localctx = new TupleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 331;
				this.match(TntParser.LPAREN);
				this.state = 332;
				this.expr(0);
				this.state = 333;
				this.match(TntParser.T__17);
				this.state = 334;
				this.expr(0);
				this.state = 339;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 335;
						this.match(TntParser.T__17);
						this.state = 336;
						this.expr(0);
						}
						}
					}
					this.state = 341;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				}
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__17) {
					{
					this.state = 342;
					this.match(TntParser.T__17);
					}
				}

				this.state = 345;
				this.match(TntParser.RPAREN);
				}
				break;

			case 11:
				{
				_localctx = new RecordContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 347;
				this.match(TntParser.T__1);
				this.state = 348;
				this.match(TntParser.IDENTIFIER);
				this.state = 349;
				this.match(TntParser.T__4);
				this.state = 350;
				this.expr(0);
				this.state = 357;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 351;
						this.match(TntParser.T__17);
						this.state = 352;
						this.match(TntParser.IDENTIFIER);
						this.state = 353;
						this.match(TntParser.T__4);
						this.state = 354;
						this.expr(0);
						}
						}
					}
					this.state = 359;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				}
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__17) {
					{
					this.state = 360;
					this.match(TntParser.T__17);
					}
				}

				this.state = 363;
				this.match(TntParser.T__2);
				}
				break;

			case 12:
				{
				_localctx = new ListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 365;
				this.match(TntParser.T__20);
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__1) | (1 << TntParser.T__11) | (1 << TntParser.T__12) | (1 << TntParser.T__13) | (1 << TntParser.T__14) | (1 << TntParser.T__15) | (1 << TntParser.T__16) | (1 << TntParser.T__20) | (1 << TntParser.T__28) | (1 << TntParser.T__29) | (1 << TntParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TntParser.T__32 - 33)) | (1 << (TntParser.T__33 - 33)) | (1 << (TntParser.STRING - 33)) | (1 << (TntParser.BOOL - 33)) | (1 << (TntParser.INT - 33)) | (1 << (TntParser.AND - 33)) | (1 << (TntParser.OR - 33)) | (1 << (TntParser.IFF - 33)) | (1 << (TntParser.IMPLIES - 33)) | (1 << (TntParser.SET - 33)) | (1 << (TntParser.LIST - 33)) | (1 << (TntParser.MAP - 33)) | (1 << (TntParser.MINUS - 33)) | (1 << (TntParser.LPAREN - 33)) | (1 << (TntParser.IDENTIFIER - 33)))) !== 0)) {
					{
					this.state = 366;
					this.expr(0);
					this.state = 371;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 367;
							this.match(TntParser.T__17);
							this.state = 368;
							this.expr(0);
							}
							}
						}
						this.state = 373;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
					}
					}
				}

				this.state = 377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__17) {
					{
					this.state = 376;
					this.match(TntParser.T__17);
					}
				}

				this.state = 379;
				this.match(TntParser.T__21);
				}
				break;

			case 13:
				{
				_localctx = new IfElseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 380;
				this.match(TntParser.T__30);
				this.state = 381;
				this.match(TntParser.LPAREN);
				this.state = 382;
				this.expr(0);
				this.state = 383;
				this.match(TntParser.RPAREN);
				this.state = 384;
				this.expr(0);
				this.state = 385;
				this.match(TntParser.T__31);
				this.state = 386;
				this.expr(5);
				}
				break;

			case 14:
				{
				_localctx = new LetInContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 388;
				this.operDef();
				this.state = 389;
				this.expr(4);
				}
				break;

			case 15:
				{
				_localctx = new NondetContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 391;
				this.match(TntParser.T__32);
				this.state = 392;
				this.match(TntParser.IDENTIFIER);
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__4) {
					{
					this.state = 393;
					this.match(TntParser.T__4);
					this.state = 394;
					this.type(0);
					}
				}

				this.state = 397;
				this.match(TntParser.ASGN);
				this.state = 398;
				this.expr(0);
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__10) {
					{
					this.state = 399;
					this.match(TntParser.T__10);
					}
				}

				this.state = 402;
				this.expr(3);
				}
				break;

			case 16:
				{
				_localctx = new ParenContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 404;
				this.match(TntParser.LPAREN);
				this.state = 405;
				this.expr(0);
				this.state = 406;
				this.match(TntParser.RPAREN);
				}
				break;

			case 17:
				{
				_localctx = new BracesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 408;
				this.match(TntParser.T__1);
				this.state = 409;
				this.expr(0);
				this.state = 410;
				this.match(TntParser.T__2);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 476;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 474;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						_localctx = new PowContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 414;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 415;
						(_localctx as PowContext)._op = this.match(TntParser.T__26);
						this.state = 416;
						this.expr(25);
						}
						break;

					case 2:
						{
						_localctx = new MultDivContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 417;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 418;
						(_localctx as MultDivContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (TntParser.MUL - 48)) | (1 << (TntParser.DIV - 48)) | (1 << (TntParser.MOD - 48)))) !== 0))) {
							(_localctx as MultDivContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 419;
						this.expr(25);
						}
						break;

					case 3:
						{
						_localctx = new PlusMinusContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 420;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 421;
						(_localctx as PlusMinusContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === TntParser.PLUS || _la === TntParser.MINUS)) {
							(_localctx as PlusMinusContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 422;
						this.expr(24);
						}
						break;

					case 4:
						{
						_localctx = new RelationsContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 423;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 424;
						(_localctx as RelationsContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (TntParser.GT - 51)) | (1 << (TntParser.LT - 51)) | (1 << (TntParser.GE - 51)) | (1 << (TntParser.LE - 51)) | (1 << (TntParser.NE - 51)) | (1 << (TntParser.EQ - 51)) | (1 << (TntParser.IN - 51)) | (1 << (TntParser.NOTIN - 51)))) !== 0))) {
							(_localctx as RelationsContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 425;
						this.expr(23);
						}
						break;

					case 5:
						{
						_localctx = new ErrorEqContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 426;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 427;
						this.match(TntParser.ASGN);
						this.state = 428;
						this.expr(21);

						                            const m = "TNT006: unexpected '=', did you mean '=='?"
						                            this.notifyErrorListeners(m)
						                          
						}
						break;

					case 6:
						{
						_localctx = new AndContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 431;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 432;
						this.match(TntParser.AND);
						this.state = 433;
						this.expr(20);
						}
						break;

					case 7:
						{
						_localctx = new OrContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 434;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 435;
						this.match(TntParser.OR);
						this.state = 436;
						this.expr(19);
						}
						break;

					case 8:
						{
						_localctx = new IffContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 437;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 438;
						this.match(TntParser.IFF);
						this.state = 439;
						this.expr(18);
						}
						break;

					case 9:
						{
						_localctx = new ImpliesContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 440;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 441;
						this.match(TntParser.IMPLIES);
						this.state = 442;
						this.expr(17);
						}
						break;

					case 10:
						{
						_localctx = new PairContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 443;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 444;
						this.match(TntParser.T__18);
						this.state = 445;
						this.expr(9);
						}
						break;

					case 11:
						{
						_localctx = new DotCallContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 446;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 447;
						this.match(TntParser.T__9);
						this.state = 448;
						this.nameAfterDot();
						this.state = 454;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
						case 1:
							{
							this.state = 449;
							this.match(TntParser.LPAREN);
							this.state = 451;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__1) | (1 << TntParser.T__11) | (1 << TntParser.T__12) | (1 << TntParser.T__13) | (1 << TntParser.T__14) | (1 << TntParser.T__15) | (1 << TntParser.T__16) | (1 << TntParser.T__20) | (1 << TntParser.T__28) | (1 << TntParser.T__29) | (1 << TntParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TntParser.T__32 - 33)) | (1 << (TntParser.T__33 - 33)) | (1 << (TntParser.STRING - 33)) | (1 << (TntParser.BOOL - 33)) | (1 << (TntParser.INT - 33)) | (1 << (TntParser.AND - 33)) | (1 << (TntParser.OR - 33)) | (1 << (TntParser.IFF - 33)) | (1 << (TntParser.IMPLIES - 33)) | (1 << (TntParser.SET - 33)) | (1 << (TntParser.LIST - 33)) | (1 << (TntParser.MAP - 33)) | (1 << (TntParser.MINUS - 33)) | (1 << (TntParser.LPAREN - 33)) | (1 << (TntParser.IDENTIFIER - 33)))) !== 0)) {
								{
								this.state = 450;
								this.argList();
								}
							}

							this.state = 453;
							this.match(TntParser.RPAREN);
							}
							break;
						}
						}
						break;

					case 12:
						{
						_localctx = new ListAppContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 456;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 457;
						this.match(TntParser.T__20);
						this.state = 458;
						this.expr(0);
						this.state = 459;
						this.match(TntParser.T__21);
						}
						break;

					case 13:
						{
						_localctx = new MatchContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 461;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 462;
						this.match(TntParser.MATCH);
						this.state = 470;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 463;
								this.match(TntParser.T__25);
								this.state = 464;
								this.match(TntParser.STRING);
								this.state = 465;
								this.match(TntParser.T__4);
								this.state = 466;
								this.identOrHole();
								this.state = 467;
								this.match(TntParser.T__19);
								this.state = 468;
								this.expr(0);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 472;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 478;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unitOrExpr(): UnitOrExprContext {
		let _localctx: UnitOrExprContext = new UnitOrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TntParser.RULE_unitOrExpr);
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 479;
				this.expr(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 480;
				this.unit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TntParser.RULE_lambda);
		let _la: number;
		try {
			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TntParser.T__33:
			case TntParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this.identOrHole();
				this.state = 484;
				this.match(TntParser.T__19);
				this.state = 485;
				this.expr(0);
				}
				break;
			case TntParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 487;
				this.match(TntParser.LPAREN);
				this.state = 488;
				this.identOrHole();
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__17) {
					{
					{
					this.state = 489;
					this.match(TntParser.T__17);
					this.state = 490;
					this.identOrHole();
					}
					}
					this.state = 495;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 496;
				this.match(TntParser.RPAREN);
				this.state = 497;
				this.match(TntParser.T__19);
				this.state = 498;
				this.expr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identOrHole(): IdentOrHoleContext {
		let _localctx: IdentOrHoleContext = new IdentOrHoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TntParser.RULE_identOrHole);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			_la = this._input.LA(1);
			if (!(_la === TntParser.T__33 || _la === TntParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identOrStar(): IdentOrStarContext {
		let _localctx: IdentOrStarContext = new IdentOrStarContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TntParser.RULE_identOrStar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			_la = this._input.LA(1);
			if (!(_la === TntParser.MUL || _la === TntParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TntParser.RULE_path);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.match(TntParser.IDENTIFIER);
			this.state = 511;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 507;
					this.match(TntParser.T__9);
					this.state = 508;
					this.match(TntParser.IDENTIFIER);
					}
					}
				}
				this.state = 513;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argList(): ArgListContext {
		let _localctx: ArgListContext = new ArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TntParser.RULE_argList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.expr(0);
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TntParser.T__17) {
				{
				{
				this.state = 515;
				this.match(TntParser.T__17);
				this.state = 516;
				this.expr(0);
				}
				}
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalCallName(): NormalCallNameContext {
		let _localctx: NormalCallNameContext = new NormalCallNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TntParser.RULE_normalCallName);
		let _la: number;
		try {
			this.state = 524;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TntParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 522;
				this.match(TntParser.IDENTIFIER);
				}
				break;
			case TntParser.AND:
			case TntParser.OR:
			case TntParser.IFF:
			case TntParser.IMPLIES:
			case TntParser.SET:
			case TntParser.LIST:
			case TntParser.MAP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 523;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (TntParser.AND - 38)) | (1 << (TntParser.OR - 38)) | (1 << (TntParser.IFF - 38)) | (1 << (TntParser.IMPLIES - 38)) | (1 << (TntParser.SET - 38)) | (1 << (TntParser.LIST - 38)) | (1 << (TntParser.MAP - 38)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameAfterDot(): NameAfterDotContext {
		let _localctx: NameAfterDotContext = new NameAfterDotContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TntParser.RULE_nameAfterDot);
		let _la: number;
		try {
			this.state = 528;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TntParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 526;
				this.match(TntParser.IDENTIFIER);
				}
				break;
			case TntParser.AND:
			case TntParser.OR:
			case TntParser.IFF:
			case TntParser.IMPLIES:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 527;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (TntParser.AND - 38)) | (1 << (TntParser.OR - 38)) | (1 << (TntParser.IFF - 38)) | (1 << (TntParser.IMPLIES - 38)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TntParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (TntParser.T__26 - 27)) | (1 << (TntParser.AND - 27)) | (1 << (TntParser.OR - 27)) | (1 << (TntParser.IFF - 27)) | (1 << (TntParser.IMPLIES - 27)) | (1 << (TntParser.PLUS - 27)) | (1 << (TntParser.MINUS - 27)) | (1 << (TntParser.MUL - 27)) | (1 << (TntParser.DIV - 27)) | (1 << (TntParser.MOD - 27)) | (1 << (TntParser.GT - 27)) | (1 << (TntParser.LT - 27)) | (1 << (TntParser.GE - 27)) | (1 << (TntParser.LE - 27)) | (1 << (TntParser.NE - 27)) | (1 << (TntParser.EQ - 27)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TntParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (TntParser.STRING - 35)) | (1 << (TntParser.BOOL - 35)) | (1 << (TntParser.INT - 35)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 9:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 25);

		case 2:
			return this.precpred(this._ctx, 24);

		case 3:
			return this.precpred(this._ctx, 23);

		case 4:
			return this.precpred(this._ctx, 22);

		case 5:
			return this.precpred(this._ctx, 20);

		case 6:
			return this.precpred(this._ctx, 19);

		case 7:
			return this.precpred(this._ctx, 18);

		case 8:
			return this.precpred(this._ctx, 17);

		case 9:
			return this.precpred(this._ctx, 16);

		case 10:
			return this.precpred(this._ctx, 8);

		case 11:
			return this.precpred(this._ctx, 29);

		case 12:
			return this.precpred(this._ctx, 26);

		case 13:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03D\u0219\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x07\x02/\n\x02\f\x02\x0E\x022\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03Q\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x05\x04V\n\x04\x03\x04\x03\x04\x05\x04Z\n\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04_\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05j\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x07\x06p\n\x06\f\x06\x0E\x06s\v\x06\x05\x06u\n\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x86\n\x07\f\x07\x0E\x07" +
		"\x89\v\x07\x03\x07\x03\x07\x05\x07\x8D\n\x07\x05\x07\x8F\n\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\x98\n\b\f\b\x0E\b\x9B\v\b" +
		"\x05\b\x9D\n\b\x03\b\x05\b\xA0\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x07\b\xB5\n\b\f\b\x0E\b\xB8\v\b\x03\b\x05\b\xBB\n\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x06\b\xC4\n\b\r\b\x0E\b\xC5\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xD0\n\b\x03\b\x03\b\x03\b" +
		"\x07\b\xD5\n\b\f\b\x0E\b\xD8\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\xE1\n\t\x03\t\x05\t\xE4\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x07\n\xEE\n\n\f\n\x0E\n\xF1\v\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\n\xFA\n\n\x05\n\xFC\n\n\x03\n\x03\n\x05\n\u0100" +
		"\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0109\n\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0116\n" +
		"\v\f\v\x0E\v\u0119\v\v\x03\v\x05\v\u011C\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x07\v\u0125\n\v\f\v\x0E\v\u0128\v\v\x03\v\x05\v\u012B\n" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0134\n\v\f\v\x0E\v" +
		"\u0137\v\v\x03\v\x05\v\u013A\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v\u0143\n\v\f\v\x0E\v\u0146\v\v\x03\v\x05\v\u0149\n\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0154\n\v\f\v\x0E\v" +
		"\u0157\v\v\x03\v\x05\v\u015A\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x07\v\u0166\n\v\f\v\x0E\v\u0169\v\v\x03\v\x05\v\u016C" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0174\n\v\f\v\x0E\v\u0177" +
		"\v\v\x05\v\u0179\n\v\x03\v\x05\v\u017C\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\u018E\n\v\x03\v\x03\v\x03\v\x05\v\u0193\n\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u019F\n\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u01C6" +
		"\n\v\x03\v\x05\v\u01C9\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x06\v\u01D9\n\v\r\v\x0E\v\u01DA" +
		"\x07\v\u01DD\n\v\f\v\x0E\v\u01E0\v\v\x03\f\x03\f\x05\f\u01E4\n\f\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u01EE\n\r\f\r\x0E\r\u01F1" +
		"\v\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01F7\n\r\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0200\n\x10\f\x10\x0E\x10\u0203\v" +
		"\x10\x03\x11\x03\x11\x03\x11\x07\x11\u0208\n\x11\f\x11\x0E\x11\u020B\v" +
		"\x11\x03\x12\x03\x12\x05\x12\u020F\n\x12\x03\x13\x03\x13\x05\x13\u0213" +
		"\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x02\x02\x04\x0E\x14\x16" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"\x02\f\x04\x02%\'>>\x03\x0224\x03\x0201\x04\x025:CD\x04\x02$$>>\x04\x02" +
		"22>>\x03\x02(.\x03\x02(+\x05\x02\x1D\x1D(+0:\x03\x02%\'\x02\u026D\x02" +
		"*\x03\x02\x02\x02\x04P\x03\x02\x02\x02\x06R\x03\x02\x02\x02\bi\x03\x02" +
		"\x02\x02\nk\x03\x02\x02\x02\fx\x03\x02\x02\x02\x0E\xCF\x03\x02\x02\x02" +
		"\x10\xD9\x03\x02\x02\x02\x12\xFF\x03\x02\x02\x02\x14\u019E\x03\x02\x02" +
		"\x02\x16\u01E3\x03\x02\x02\x02\x18\u01F6\x03\x02\x02\x02\x1A\u01F8\x03" +
		"\x02\x02\x02\x1C\u01FA\x03\x02\x02\x02\x1E\u01FC\x03\x02\x02\x02 \u0204" +
		"\x03\x02\x02\x02\"\u020E\x03\x02\x02\x02$\u0212\x03\x02\x02\x02&\u0214" +
		"\x03\x02\x02\x02(\u0216\x03\x02\x02\x02*+\x07\x03\x02\x02+,\x07>\x02\x02" +
		",0\x07\x04\x02\x02-/\x05\x04\x03\x02.-\x03\x02\x02\x02/2\x03\x02\x02\x02" +
		"0.\x03\x02\x02\x0201\x03\x02\x02\x0213\x03\x02\x02\x0220\x03\x02\x02\x02" +
		"34\x07\x05\x02\x024\x03\x03\x02\x02\x0256\x07\x06\x02\x0267\x07>\x02\x02" +
		"78\x07\x07\x02\x028Q\x05\x0E\b\x029:\x07\b\x02\x02:;\x07>\x02\x02;<\x07" +
		"\x07\x02\x02<Q\x05\x0E\b\x02=>\x07\t\x02\x02>?\x05\x1A\x0E\x02?@\x07;" +
		"\x02\x02@A\x05\x14\v\x02AQ\x03\x02\x02\x02BQ\x05\x06\x04\x02CQ\x05\x02" +
		"\x02\x02DQ\x05\f\x07\x02EF\x07\n\x02\x02FQ\x07>\x02\x02GH\x07\n\x02\x02" +
		"HI\x07>\x02\x02IJ\x07;\x02\x02JQ\x05\x0E\b\x02KL\x07\v\x02\x02LM\x05\x1E" +
		"\x10\x02MN\x07\f\x02\x02NO\x05\x1C\x0F\x02OQ\x03\x02\x02\x02P5\x03\x02" +
		"\x02\x02P9\x03\x02\x02\x02P=\x03\x02\x02\x02PB\x03\x02\x02\x02PC\x03\x02" +
		"\x02\x02PD\x03\x02\x02\x02PE\x03\x02\x02\x02PG\x03\x02\x02\x02PK\x03\x02" +
		"\x02\x02Q\x05\x03\x02\x02\x02RS\x05\b\x05\x02SU\x07>\x02\x02TV\x05\n\x06" +
		"\x02UT\x03\x02\x02\x02UV\x03\x02\x02\x02VY\x03\x02\x02\x02WX\x07\x07\x02" +
		"\x02XZ\x05\x0E\b\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02" +
		"\x02[\\\x07;\x02\x02\\^\x05\x14\v\x02]_\x07\r\x02\x02^]\x03\x02\x02\x02" +
		"^_\x03\x02\x02\x02_\x07\x03\x02\x02\x02`j\x07\x0E\x02\x02aj\x07\x0F\x02" +
		"\x02bc\x07\x10\x02\x02cj\x07\x0E\x02\x02de\x07\x10\x02\x02ej\x07\x0F\x02" +
		"\x02fj\x07\x11\x02\x02gj\x07\x12\x02\x02hj\x07\x13\x02\x02i`\x03\x02\x02" +
		"\x02ia\x03\x02\x02\x02ib\x03\x02\x02\x02id\x03\x02\x02\x02if\x03\x02\x02" +
		"\x02ig\x03\x02\x02\x02ih\x03\x02\x02\x02j\t\x03\x02\x02\x02kt\x07<\x02" +
		"\x02lq\x07>\x02\x02mn\x07\x14\x02\x02np\x07>\x02\x02om\x03\x02\x02\x02" +
		"ps\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02ru\x03\x02\x02\x02" +
		"sq\x03\x02\x02\x02tl\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02" +
		"vw\x07=\x02\x02w\v\x03\x02\x02\x02xy\x07\x03\x02\x02yz\x07>\x02\x02z{" +
		"\x07;\x02\x02{|\x07>\x02\x02|\x8E\x07<\x02\x02}\x8F\x072\x02\x02~\x7F" +
		"\x07>\x02\x02\x7F\x80\x07;\x02\x02\x80\x87\x05\x14\v\x02\x81\x82\x07\x14" +
		"\x02\x02\x82\x83\x07>\x02\x02\x83\x84\x07;\x02\x02\x84\x86\x05\x14\v\x02" +
		"\x85\x81\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02" +
		"\x87\x88\x03\x02\x02\x02\x88\x8C\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02" +
		"\x8A\x8B\x07\x14\x02\x02\x8B\x8D\x072\x02\x02\x8C\x8A\x03\x02\x02\x02" +
		"\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02\x02\x02\x8E}\x03\x02\x02\x02" +
		"\x8E~\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x07=\x02\x02\x91" +
		"\r\x03\x02\x02\x02\x92\x93\b\b\x01\x02\x93\x9C\x07<\x02\x02\x94\x99\x05" +
		"\x0E\b\x02\x95\x96\x07\x14\x02\x02\x96\x98\x05\x0E\b\x02\x97\x95\x03\x02" +
		"\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02" +
		"\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\x94\x03\x02" +
		"\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\xA0\x07\x14" +
		"\x02\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02" +
		"\x02\x02\xA1\xA2\x07=\x02\x02\xA2\xA3\x07\x16\x02\x02\xA3\xD0\x05\x0E" +
		"\b\r\xA4\xA5\x07,\x02\x02\xA5\xA6\x07\x17\x02\x02\xA6\xA7\x05\x0E\b\x02" +
		"\xA7\xA8\x07\x18\x02\x02\xA8\xD0\x03\x02\x02\x02\xA9\xAA\x07-\x02\x02" +
		"\xAA\xAB\x07\x17\x02\x02\xAB\xAC\x05\x0E\b\x02\xAC\xAD\x07\x18\x02\x02" +
		"\xAD\xD0\x03\x02\x02\x02\xAE\xAF\x07<\x02\x02\xAF\xB0\x05\x0E\b\x02\xB0" +
		"\xB1\x07\x14\x02\x02\xB1\xB6\x05\x0E\b\x02\xB2\xB3\x07\x14\x02\x02\xB3" +
		"\xB5\x05\x0E\b\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6" +
		"\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8" +
		"\xB6\x03\x02\x02\x02\xB9\xBB\x07\x14\x02\x02\xBA\xB9\x03\x02\x02\x02\xBA" +
		"\xBB\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x07=\x02\x02\xBD" +
		"\xD0\x03\x02\x02\x02\xBE\xBF\x07\x04\x02\x02\xBF\xC0\x05\x12\n\x02\xC0" +
		"\xC1\x07\x05\x02\x02\xC1\xD0\x03\x02\x02\x02\xC2\xC4\x05\x10\t\x02\xC3" +
		"\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5" +
		"\xC6\x03\x02\x02\x02\xC6\xD0\x03\x02\x02\x02\xC7\xD0\x07\x19\x02\x02\xC8" +
		"\xD0\x07\x1A\x02\x02\xC9\xD0\x07\x1B\x02\x02\xCA\xD0\x07>\x02\x02\xCB" +
		"\xCC\x07<\x02\x02\xCC\xCD\x05\x0E\b\x02\xCD\xCE\x07=\x02\x02\xCE\xD0\x03" +
		"\x02\x02\x02\xCF\x92\x03\x02\x02\x02\xCF\xA4\x03\x02\x02\x02\xCF\xA9\x03" +
		"\x02\x02\x02\xCF\xAE\x03\x02\x02\x02\xCF\xBE\x03\x02\x02\x02\xCF\xC3\x03" +
		"\x02\x02\x02\xCF\xC7\x03\x02\x02\x02\xCF\xC8\x03\x02\x02\x02\xCF\xC9\x03" +
		"\x02\x02\x02\xCF\xCA\x03\x02\x02\x02\xCF\xCB\x03\x02\x02\x02\xD0\xD6\x03" +
		"\x02\x02\x02\xD1\xD2\f\x0E\x02\x02\xD2\xD3\x07\x15\x02\x02\xD3\xD5\x05" +
		"\x0E\b\x0E\xD4\xD1\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03" +
		"\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\x0F\x03\x02\x02\x02\xD8\xD6\x03" +
		"\x02\x02\x02\xD9\xDA\x07\x1C\x02\x02\xDA\xDB\x07\x04\x02\x02\xDB\xDC\x07" +
		">\x02\x02\xDC\xDD\x07\x07\x02\x02\xDD\xE0\x07%\x02\x02\xDE\xDF\x07\x14" +
		"\x02\x02\xDF\xE1\x05\x12\n\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02" +
		"\x02\x02\xE1\xE3\x03\x02\x02\x02\xE2\xE4\x07\x14\x02\x02\xE3\xE2\x03\x02" +
		"\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x07\x05" +
		"\x02\x02\xE6\x11\x03\x02\x02\x02\xE7\u0100\x03\x02\x02\x02\xE8\xE9\x07" +
		">\x02\x02\xE9\xEA\x07\x07\x02\x02\xEA\xEB\x05\x0E\b\x02\xEB\xEC\x07\x14" +
		"\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xE8\x03\x02\x02\x02\xEE\xF1\x03\x02" +
		"\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xFB\x03\x02" +
		"\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF3\x07>\x02\x02\xF3\xF4\x07\x07" +
		"\x02\x02\xF4\xF5\x05\x0E\b\x02\xF5\xF9\x03\x02\x02\x02\xF6\xFA\x07\x14" +
		"\x02\x02\xF7\xF8\x07\x1C\x02\x02\xF8\xFA\x07>\x02\x02\xF9\xF6\x03\x02" +
		"\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02" +
		"\x02\x02\xFB\xF2\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\u0100\x03" +
		"\x02\x02\x02\xFD\xFE\x07\x1C\x02\x02\xFE\u0100\x07>\x02\x02\xFF\xE7\x03" +
		"\x02\x02\x02\xFF\xEF\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\x13" +
		"\x03\x02\x02\x02\u0101\u0102\b\v\x01\x02\u0102\u0103\x071\x02\x02\u0103" +
		"\u019F\x05\x14\v \u0104\u019F\x05\x18\r\x02\u0105\u0106\x05\"\x12\x02" +
		"\u0106\u0108\x07<\x02\x02\u0107\u0109\x05 \x11\x02\u0108\u0107\x03\x02" +
		"\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A" +
		"\u010B\x07=\x02\x02\u010B\u019F\x03\x02\x02\x02\u010C\u010D\x07>\x02\x02" +
		"\u010D\u010E\x07\x1E\x02\x02\u010E\u010F\x07;\x02\x02\u010F\u019F\x05" +
		"\x14\v\x17\u0110\u0111\x07(\x02\x02\u0111\u0112\x07\x04\x02\x02\u0112" +
		"\u0117\x05\x14\v\x02\u0113\u0114\x07\x14\x02\x02\u0114\u0116\x05\x14\v" +
		"\x02\u0115\u0113\x03\x02\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0115" +
		"\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02" +
		"\u0119\u0117\x03\x02\x02\x02\u011A\u011C\x07\x14\x02\x02\u011B\u011A\x03" +
		"\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D" +
		"\u011E\x07\x05\x02\x02\u011E\u019F\x03\x02\x02\x02\u011F\u0120\x07)\x02" +
		"\x02\u0120\u0121\x07\x04\x02\x02\u0121\u0126\x05\x14\v\x02\u0122\u0123" +
		"\x07\x14\x02\x02\u0123\u0125\x05\x14\v\x02\u0124\u0122\x03\x02\x02\x02" +
		"\u0125\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03" +
		"\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129" +
		"\u012B\x07\x14\x02\x02\u012A\u0129\x03\x02\x02\x02\u012A\u012B\x03\x02" +
		"\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012D\x07\x05\x02\x02\u012D" +
		"\u019F\x03\x02\x02\x02\u012E\u012F\x07\x1F\x02\x02\u012F\u0130\x07\x04" +
		"\x02\x02\u0130\u0135\x05\x14\v\x02\u0131\u0132\x07\x14\x02\x02\u0132\u0134" +
		"\x05\x14\v\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0137\x03\x02\x02\x02" +
		"\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0139\x03" +
		"\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138\u013A\x07\x14\x02\x02\u0139" +
		"\u0138\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02" +
		"\x02\x02\u013B\u013C\x07\x05\x02\x02\u013C\u019F\x03\x02\x02\x02\u013D" +
		"\u013E\x07 \x02\x02\u013E\u013F\x07\x04\x02\x02\u013F\u0144\x05\x14\v" +
		"\x02\u0140\u0141\x07\x14\x02\x02\u0141\u0143\x05\x14\v\x02\u0142\u0140" +
		"\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02" +
		"\u0144\u0145\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0144\x03" +
		"\x02\x02\x02\u0147\u0149\x07\x14\x02\x02\u0148\u0147\x03\x02\x02\x02\u0148" +
		"\u0149\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x07\x05" +
		"\x02\x02\u014B\u019F\x03\x02\x02\x02\u014C\u019F\t\x02\x02\x02\u014D\u014E" +
		"\x07<\x02\x02\u014E\u014F\x05\x14\v\x02\u014F\u0150\x07\x14\x02\x02\u0150" +
		"\u0155\x05\x14\v\x02\u0151\u0152\x07\x14\x02\x02\u0152\u0154\x05\x14\v" +
		"\x02\u0153\u0151\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153" +
		"\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02" +
		"\u0157\u0155\x03\x02\x02\x02\u0158\u015A\x07\x14\x02\x02\u0159\u0158\x03" +
		"\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B" +
		"\u015C\x07=\x02\x02\u015C\u019F\x03\x02\x02\x02\u015D\u015E\x07\x04\x02" +
		"\x02\u015E\u015F\x07>\x02\x02\u015F\u0160\x07\x07\x02\x02\u0160\u0167" +
		"\x05\x14\v\x02\u0161\u0162\x07\x14\x02\x02\u0162\u0163\x07>\x02\x02\u0163" +
		"\u0164\x07\x07\x02\x02\u0164\u0166\x05\x14\v\x02\u0165\u0161\x03\x02\x02" +
		"\x02\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168" +
		"\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02" +
		"\u016A\u016C\x07\x14\x02\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C\x03" +
		"\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x07\x05\x02\x02\u016E" +
		"\u019F\x03\x02\x02\x02\u016F\u0178\x07\x17\x02\x02\u0170\u0175\x05\x14" +
		"\v\x02\u0171\u0172\x07\x14\x02\x02\u0172\u0174\x05\x14\v\x02\u0173\u0171" +
		"\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02" +
		"\u0175\u0176\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03" +
		"\x02\x02\x02\u0178\u0170\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
		"\u017B\x03\x02\x02\x02\u017A\u017C\x07\x14\x02\x02\u017B\u017A\x03\x02" +
		"\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D" +
		"\u019F\x07\x18\x02\x02\u017E\u017F\x07!\x02\x02\u017F\u0180\x07<\x02\x02" +
		"\u0180\u0181\x05\x14\v\x02\u0181\u0182\x07=\x02\x02\u0182\u0183\x05\x14" +
		"\v\x02\u0183\u0184\x07\"\x02\x02\u0184\u0185\x05\x14\v\x07\u0185\u019F" +
		"\x03\x02\x02\x02\u0186\u0187\x05\x06\x04\x02\u0187\u0188\x05\x14\v\x06" +
		"\u0188\u019F\x03\x02\x02\x02\u0189\u018A\x07#\x02\x02\u018A\u018D\x07" +
		">\x02\x02\u018B\u018C\x07\x07\x02\x02\u018C\u018E\x05\x0E\b\x02\u018D" +
		"\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u018F\x03\x02" +
		"\x02\x02\u018F\u0190\x07;\x02\x02\u0190\u0192\x05\x14\v\x02\u0191\u0193" +
		"\x07\r\x02\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02" +
		"\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x05\x14\v\x05\u0195\u019F\x03" +
		"\x02\x02\x02\u0196\u0197\x07<\x02\x02\u0197\u0198\x05\x14\v\x02\u0198" +
		"\u0199\x07=\x02\x02\u0199\u019F\x03\x02\x02\x02\u019A\u019B\x07\x04\x02" +
		"\x02\u019B\u019C\x05\x14\v\x02\u019C\u019D\x07\x05\x02\x02\u019D\u019F" +
		"\x03\x02\x02\x02\u019E\u0101\x03\x02\x02\x02\u019E\u0104\x03\x02\x02\x02" +
		"\u019E\u0105\x03\x02\x02\x02\u019E\u010C\x03\x02\x02\x02\u019E\u0110\x03" +
		"\x02\x02\x02\u019E\u011F\x03\x02\x02\x02\u019E\u012E\x03\x02\x02\x02\u019E" +
		"\u013D\x03\x02\x02\x02\u019E\u014C\x03\x02\x02\x02\u019E\u014D\x03\x02" +
		"\x02\x02\u019E\u015D\x03\x02\x02\x02\u019E\u016F\x03\x02\x02\x02\u019E" +
		"\u017E\x03\x02\x02\x02\u019E\u0186\x03\x02\x02\x02\u019E\u0189\x03\x02" +
		"\x02\x02\u019E\u0196\x03\x02\x02\x02\u019E\u019A\x03\x02\x02\x02\u019F" +
		"\u01DE\x03\x02\x02\x02\u01A0\u01A1\f\x1B\x02\x02\u01A1\u01A2\x07\x1D\x02" +
		"\x02\u01A2\u01DD\x05\x14\v\x1B\u01A3\u01A4\f\x1A\x02\x02\u01A4\u01A5\t" +
		"\x03\x02\x02\u01A5\u01DD\x05\x14\v\x1B\u01A6\u01A7\f\x19\x02\x02\u01A7" +
		"\u01A8\t\x04\x02\x02\u01A8\u01DD\x05\x14\v\x1A\u01A9\u01AA\f\x18\x02\x02" +
		"\u01AA\u01AB\t\x05\x02\x02\u01AB\u01DD\x05\x14\v\x19\u01AC\u01AD\f\x16" +
		"\x02\x02\u01AD\u01AE\x07;\x02\x02\u01AE\u01AF\x05\x14\v\x17\u01AF\u01B0" +
		"\b\v\x01\x02\u01B0\u01DD\x03\x02\x02\x02\u01B1\u01B2\f\x15\x02\x02\u01B2" +
		"\u01B3\x07(\x02\x02\u01B3\u01DD\x05\x14\v\x16\u01B4\u01B5\f\x14\x02\x02" +
		"\u01B5\u01B6\x07)\x02\x02\u01B6\u01DD\x05\x14\v\x15\u01B7\u01B8\f\x13" +
		"\x02\x02\u01B8\u01B9\x07*\x02\x02\u01B9\u01DD\x05\x14\v\x14\u01BA\u01BB" +
		"\f\x12\x02\x02\u01BB\u01BC\x07+\x02\x02\u01BC\u01DD\x05\x14\v\x13\u01BD" +
		"\u01BE\f\n\x02\x02\u01BE\u01BF\x07\x15\x02\x02\u01BF\u01DD\x05\x14\v\v" +
		"\u01C0\u01C1\f\x1F\x02\x02\u01C1\u01C2\x07\f\x02\x02\u01C2\u01C8\x05$" +
		"\x13\x02\u01C3\u01C5\x07<\x02\x02\u01C4\u01C6\x05 \x11\x02\u01C5\u01C4" +
		"\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02" +
		"\u01C7\u01C9\x07=\x02\x02\u01C8\u01C3\x03\x02\x02\x02\u01C8\u01C9\x03" +
		"\x02\x02\x02\u01C9\u01DD\x03\x02\x02\x02\u01CA\u01CB\f\x1C\x02\x02\u01CB" +
		"\u01CC\x07\x17\x02\x02\u01CC\u01CD\x05\x14\v\x02\u01CD\u01CE\x07\x18\x02" +
		"\x02\u01CE\u01DD\x03\x02\x02\x02\u01CF\u01D0\f\x11\x02\x02\u01D0\u01D8" +
		"\x07/\x02\x02\u01D1\u01D2\x07\x1C\x02\x02\u01D2\u01D3\x07%\x02\x02\u01D3" +
		"\u01D4\x07\x07\x02\x02\u01D4\u01D5\x05\x1A\x0E\x02\u01D5\u01D6\x07\x16" +
		"\x02\x02\u01D6\u01D7\x05\x14\v\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u01D1" +
		"\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02" +
		"\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01A0\x03" +
		"\x02\x02\x02\u01DC\u01A3\x03\x02\x02\x02\u01DC\u01A6\x03\x02\x02\x02\u01DC" +
		"\u01A9\x03\x02\x02\x02\u01DC\u01AC\x03\x02\x02\x02\u01DC\u01B1\x03\x02" +
		"\x02\x02\u01DC\u01B4\x03\x02\x02\x02\u01DC\u01B7\x03\x02\x02\x02\u01DC" +
		"\u01BA\x03\x02\x02\x02\u01DC\u01BD\x03\x02\x02\x02\u01DC\u01C0\x03\x02" +
		"\x02\x02\u01DC\u01CA\x03\x02\x02\x02\u01DC\u01CF\x03\x02\x02\x02\u01DD" +
		"\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02" +
		"\x02\x02\u01DF\x15\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E4" +
		"\x05\x14\v\x02\u01E2\u01E4\x05\x04\x03\x02\u01E3\u01E1\x03\x02\x02\x02" +
		"\u01E3\u01E2\x03\x02\x02\x02\u01E4\x17\x03\x02\x02\x02\u01E5\u01E6\x05" +
		"\x1A\x0E\x02\u01E6\u01E7\x07\x16\x02\x02\u01E7\u01E8\x05\x14\v\x02\u01E8" +
		"\u01F7\x03\x02\x02\x02\u01E9\u01EA\x07<\x02\x02\u01EA\u01EF\x05\x1A\x0E" +
		"\x02\u01EB\u01EC\x07\x14\x02\x02\u01EC\u01EE\x05\x1A\x0E\x02\u01ED\u01EB" +
		"\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02" +
		"\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01EF\x03" +
		"\x02\x02\x02\u01F2\u01F3\x07=\x02\x02\u01F3\u01F4\x07\x16\x02\x02\u01F4" +
		"\u01F5\x05\x14\v\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6\u01E5\x03\x02\x02" +
		"\x02\u01F6\u01E9\x03\x02\x02\x02\u01F7\x19\x03\x02\x02\x02\u01F8\u01F9" +
		"\t\x06\x02\x02\u01F9\x1B\x03\x02\x02\x02\u01FA\u01FB\t\x07\x02\x02\u01FB" +
		"\x1D\x03\x02\x02\x02\u01FC\u0201\x07>\x02\x02\u01FD\u01FE\x07\f\x02\x02" +
		"\u01FE\u0200\x07>\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0203\x03" +
		"\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202" +
		"\x1F\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0204\u0209\x05\x14\v" +
		"\x02\u0205\u0206\x07\x14\x02\x02\u0206\u0208\x05\x14\v\x02\u0207\u0205" +
		"\x03\x02\x02\x02\u0208\u020B\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02" +
		"\u0209\u020A\x03\x02\x02\x02\u020A!\x03\x02\x02\x02\u020B\u0209\x03\x02" +
		"\x02\x02\u020C\u020F\x07>\x02\x02\u020D\u020F\t\b\x02\x02\u020E\u020C" +
		"\x03\x02\x02\x02\u020E\u020D\x03\x02\x02\x02\u020F#\x03\x02\x02\x02\u0210" +
		"\u0213\x07>\x02\x02\u0211\u0213\t\t\x02\x02\u0212\u0210\x03\x02\x02\x02" +
		"\u0212\u0211\x03\x02\x02\x02\u0213%\x03\x02\x02\x02\u0214\u0215\t\n\x02" +
		"\x02\u0215\'\x03\x02\x02\x02\u0216\u0217\t\v\x02\x02\u0217)\x03\x02\x02" +
		"\x02:0PUY^iqt\x87\x8C\x8E\x99\x9C\x9F\xB6\xBA\xC5\xCF\xD6\xE0\xE3\xEF" +
		"\xF9\xFB\xFF\u0108";
	private static readonly _serializedATNSegment1: string =
		"\u0117\u011B\u0126\u012A\u0135\u0139\u0144\u0148\u0155\u0159\u0167\u016B" +
		"\u0175\u0178\u017B\u018D\u0192\u019E\u01C5\u01C8\u01DA\u01DC\u01DE\u01E3" +
		"\u01EF\u01F6\u0201\u0209\u020E\u0212";
	public static readonly _serializedATN: string = Utils.join(
		[
			TntParser._serializedATNSegment0,
			TntParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TntParser.__ATN) {
			TntParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TntParser._serializedATN));
		}

		return TntParser.__ATN;
	}

}

export class ModuleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public unit(): UnitContext[];
	public unit(i: number): UnitContext;
	public unit(i?: number): UnitContext | UnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnitContext);
		} else {
			return this.getRuleContext(i, UnitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_module; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_unit; }
	public copyFrom(ctx: UnitContext): void {
		super.copyFrom(ctx);
	}
}
export class ConstContext extends UnitContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterConst) {
			listener.enterConst(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitConst) {
			listener.exitConst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitConst) {
			return visitor.visitConst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarContext extends UnitContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssumeContext extends UnitContext {
	public identOrHole(): IdentOrHoleContext {
		return this.getRuleContext(0, IdentOrHoleContext);
	}
	public ASGN(): TerminalNode { return this.getToken(TntParser.ASGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterAssume) {
			listener.enterAssume(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitAssume) {
			listener.exitAssume(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitAssume) {
			return visitor.visitAssume(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperContext extends UnitContext {
	public operDef(): OperDefContext {
		return this.getRuleContext(0, OperDefContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOper) {
			listener.enterOper(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOper) {
			listener.exitOper(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOper) {
			return visitor.visitOper(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModuleNestedContext extends UnitContext {
	public module(): ModuleContext {
		return this.getRuleContext(0, ModuleContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterModuleNested) {
			listener.enterModuleNested(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitModuleNested) {
			listener.exitModuleNested(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitModuleNested) {
			return visitor.visitModuleNested(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceContext extends UnitContext {
	public instanceMod(): InstanceModContext {
		return this.getRuleContext(0, InstanceModContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterInstance) {
			listener.enterInstance(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitInstance) {
			listener.exitInstance(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitInstance) {
			return visitor.visitInstance(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypedefContext extends UnitContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public ASGN(): TerminalNode | undefined { return this.tryGetToken(TntParser.ASGN, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypedef) {
			listener.enterTypedef(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypedef) {
			listener.exitTypedef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypedef) {
			return visitor.visitTypedef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImportDefContext extends UnitContext {
	public path(): PathContext {
		return this.getRuleContext(0, PathContext);
	}
	public identOrStar(): IdentOrStarContext {
		return this.getRuleContext(0, IdentOrStarContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterImportDef) {
			listener.enterImportDef(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitImportDef) {
			listener.exitImportDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitImportDef) {
			return visitor.visitImportDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperDefContext extends ParserRuleContext {
	public qualifier(): QualifierContext {
		return this.getRuleContext(0, QualifierContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public ASGN(): TerminalNode { return this.getToken(TntParser.ASGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public params(): ParamsContext | undefined {
		return this.tryGetRuleContext(0, ParamsContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_operDef; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOperDef) {
			listener.enterOperDef(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOperDef) {
			listener.exitOperDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOperDef) {
			return visitor.visitOperDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_qualifier; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterQualifier) {
			listener.enterQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitQualifier) {
			listener.exitQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitQualifier) {
			return visitor.visitQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_params; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterParams) {
			listener.enterParams(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitParams) {
			listener.exitParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitParams) {
			return visitor.visitParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceModContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	public ASGN(): TerminalNode[];
	public ASGN(i: number): TerminalNode;
	public ASGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.ASGN);
		} else {
			return this.getToken(TntParser.ASGN, i);
		}
	}
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(TntParser.MUL, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_instanceMod; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterInstanceMod) {
			listener.enterInstanceMod(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitInstanceMod) {
			listener.exitInstanceMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitInstanceMod) {
			return visitor.visitInstanceMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeFunContext extends TypeContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeFun) {
			listener.enterTypeFun(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeFun) {
			listener.exitTypeFun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeFun) {
			return visitor.visitTypeFun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeOperContext extends TypeContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeOper) {
			listener.enterTypeOper(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeOper) {
			listener.exitTypeOper(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeOper) {
			return visitor.visitTypeOper(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeSetContext extends TypeContext {
	public SET(): TerminalNode { return this.getToken(TntParser.SET, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeSet) {
			listener.enterTypeSet(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeSet) {
			listener.exitTypeSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeSet) {
			return visitor.visitTypeSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeListContext extends TypeContext {
	public LIST(): TerminalNode { return this.getToken(TntParser.LIST, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeTupleContext extends TypeContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeTuple) {
			listener.enterTypeTuple(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeTuple) {
			listener.exitTypeTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeTuple) {
			return visitor.visitTypeTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRecContext extends TypeContext {
	public row(): RowContext {
		return this.getRuleContext(0, RowContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeRec) {
			listener.enterTypeRec(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeRec) {
			listener.exitTypeRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeRec) {
			return visitor.visitTypeRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeUnionRecContext extends TypeContext {
	public typeUnionRecOne(): TypeUnionRecOneContext[];
	public typeUnionRecOne(i: number): TypeUnionRecOneContext;
	public typeUnionRecOne(i?: number): TypeUnionRecOneContext | TypeUnionRecOneContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeUnionRecOneContext);
		} else {
			return this.getRuleContext(i, TypeUnionRecOneContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeUnionRec) {
			listener.enterTypeUnionRec(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeUnionRec) {
			listener.exitTypeUnionRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeUnionRec) {
			return visitor.visitTypeUnionRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeIntContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeInt) {
			listener.enterTypeInt(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeInt) {
			listener.exitTypeInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeInt) {
			return visitor.visitTypeInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeStrContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeStr) {
			listener.enterTypeStr(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeStr) {
			listener.exitTypeStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeStr) {
			return visitor.visitTypeStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeBoolContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeBool) {
			listener.enterTypeBool(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeBool) {
			listener.exitTypeBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeBool) {
			return visitor.visitTypeBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstOrVarContext extends TypeContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeConstOrVar) {
			listener.enterTypeConstOrVar(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeConstOrVar) {
			listener.exitTypeConstOrVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeConstOrVar) {
			return visitor.visitTypeConstOrVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeParenContext extends TypeContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeParen) {
			listener.enterTypeParen(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeParen) {
			listener.exitTypeParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeParen) {
			return visitor.visitTypeParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeUnionRecOneContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public STRING(): TerminalNode { return this.getToken(TntParser.STRING, 0); }
	public row(): RowContext | undefined {
		return this.tryGetRuleContext(0, RowContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_typeUnionRecOne; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeUnionRecOne) {
			listener.enterTypeUnionRecOne(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeUnionRecOne) {
			listener.exitTypeUnionRecOne(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeUnionRecOne) {
			return visitor.visitTypeUnionRecOne(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_row; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterRow) {
			listener.enterRow(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitRow) {
			listener.exitRow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitRow) {
			return visitor.visitRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class UminusContext extends ExprContext {
	public MINUS(): TerminalNode { return this.getToken(TntParser.MINUS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterUminus) {
			listener.enterUminus(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitUminus) {
			listener.exitUminus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitUminus) {
			return visitor.visitUminus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotCallContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public nameAfterDot(): NameAfterDotContext {
		return this.getRuleContext(0, NameAfterDotContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(TntParser.RPAREN, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterDotCall) {
			listener.enterDotCall(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitDotCall) {
			listener.exitDotCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitDotCall) {
			return visitor.visitDotCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaConsContext extends ExprContext {
	public lambda(): LambdaContext {
		return this.getRuleContext(0, LambdaContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterLambdaCons) {
			listener.enterLambdaCons(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitLambdaCons) {
			listener.exitLambdaCons(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitLambdaCons) {
			return visitor.visitLambdaCons(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperAppContext extends ExprContext {
	public normalCallName(): NormalCallNameContext {
		return this.getRuleContext(0, NormalCallNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOperApp) {
			listener.enterOperApp(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOperApp) {
			listener.exitOperApp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOperApp) {
			return visitor.visitOperApp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListAppContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterListApp) {
			listener.enterListApp(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitListApp) {
			listener.exitListApp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitListApp) {
			return visitor.visitListApp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterPow) {
			listener.enterPow(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitPow) {
			listener.exitPow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitPow) {
			return visitor.visitPow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultDivContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(TntParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(TntParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(TntParser.MOD, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterMultDiv) {
			listener.enterMultDiv(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitMultDiv) {
			listener.exitMultDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitMultDiv) {
			return visitor.visitMultDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PlusMinusContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(TntParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TntParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterPlusMinus) {
			listener.enterPlusMinus(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitPlusMinus) {
			listener.exitPlusMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitPlusMinus) {
			return visitor.visitPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationsContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(TntParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(TntParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(TntParser.GE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(TntParser.LE, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(TntParser.NE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(TntParser.EQ, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TntParser.IN, 0); }
	public NOTIN(): TerminalNode | undefined { return this.tryGetToken(TntParser.NOTIN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterRelations) {
			listener.enterRelations(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitRelations) {
			listener.exitRelations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitRelations) {
			return visitor.visitRelations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AsgnContext extends ExprContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public ASGN(): TerminalNode { return this.getToken(TntParser.ASGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterAsgn) {
			listener.enterAsgn(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitAsgn) {
			listener.exitAsgn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitAsgn) {
			return visitor.visitAsgn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ErrorEqContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ASGN(): TerminalNode { return this.getToken(TntParser.ASGN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterErrorEq) {
			listener.enterErrorEq(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitErrorEq) {
			listener.exitErrorEq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitErrorEq) {
			return visitor.visitErrorEq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(TntParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterAnd) {
			listener.enterAnd(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitAnd) {
			listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(TntParser.OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOr) {
			listener.enterOr(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOr) {
			listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IffContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public IFF(): TerminalNode { return this.getToken(TntParser.IFF, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterIff) {
			listener.enterIff(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitIff) {
			listener.exitIff(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitIff) {
			return visitor.visitIff(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImpliesContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public IMPLIES(): TerminalNode { return this.getToken(TntParser.IMPLIES, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterImplies) {
			listener.enterImplies(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitImplies) {
			listener.exitImplies(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitImplies) {
			return visitor.visitImplies(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MATCH(): TerminalNode { return this.getToken(TntParser.MATCH, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.STRING);
		} else {
			return this.getToken(TntParser.STRING, i);
		}
	}
	public identOrHole(): IdentOrHoleContext[];
	public identOrHole(i: number): IdentOrHoleContext;
	public identOrHole(i?: number): IdentOrHoleContext | IdentOrHoleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentOrHoleContext);
		} else {
			return this.getRuleContext(i, IdentOrHoleContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterMatch) {
			listener.enterMatch(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitMatch) {
			listener.exitMatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitMatch) {
			return visitor.visitMatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExprContext extends ExprContext {
	public AND(): TerminalNode { return this.getToken(TntParser.AND, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExprContext extends ExprContext {
	public OR(): TerminalNode { return this.getToken(TntParser.OR, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActionAllContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterActionAll) {
			listener.enterActionAll(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitActionAll) {
			listener.exitActionAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitActionAll) {
			return visitor.visitActionAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActionAnyContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterActionAny) {
			listener.enterActionAny(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitActionAny) {
			listener.exitActionAny(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitActionAny) {
			return visitor.visitActionAny(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralOrIdContext extends ExprContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(TntParser.IDENTIFIER, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(TntParser.INT, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(TntParser.BOOL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(TntParser.STRING, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterLiteralOrId) {
			listener.enterLiteralOrId(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitLiteralOrId) {
			listener.exitLiteralOrId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitLiteralOrId) {
			return visitor.visitLiteralOrId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTuple) {
			listener.enterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTuple) {
			listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PairContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterPair) {
			listener.enterPair(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitPair) {
			listener.exitPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecordContext extends ExprContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterRecord) {
			listener.enterRecord(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitRecord) {
			listener.exitRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitRecord) {
			return visitor.visitRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfElseContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterIfElse) {
			listener.enterIfElse(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitIfElse) {
			listener.exitIfElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitIfElse) {
			return visitor.visitIfElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetInContext extends ExprContext {
	public operDef(): OperDefContext {
		return this.getRuleContext(0, OperDefContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterLetIn) {
			listener.enterLetIn(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitLetIn) {
			listener.exitLetIn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitLetIn) {
			return visitor.visitLetIn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NondetContext extends ExprContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public ASGN(): TerminalNode { return this.getToken(TntParser.ASGN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterNondet) {
			listener.enterNondet(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitNondet) {
			listener.exitNondet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitNondet) {
			return visitor.visitNondet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterParen) {
			listener.enterParen(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitParen) {
			listener.exitParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitParen) {
			return visitor.visitParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracesContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterBraces) {
			listener.enterBraces(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitBraces) {
			listener.exitBraces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitBraces) {
			return visitor.visitBraces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitOrExprContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public unit(): UnitContext | undefined {
		return this.tryGetRuleContext(0, UnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_unitOrExpr; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterUnitOrExpr) {
			listener.enterUnitOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitUnitOrExpr) {
			listener.exitUnitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitUnitOrExpr) {
			return visitor.visitUnitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaContext extends ParserRuleContext {
	public identOrHole(): IdentOrHoleContext[];
	public identOrHole(i: number): IdentOrHoleContext;
	public identOrHole(i?: number): IdentOrHoleContext | IdentOrHoleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentOrHoleContext);
		} else {
			return this.getRuleContext(i, IdentOrHoleContext);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(TntParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_lambda; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentOrHoleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_identOrHole; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterIdentOrHole) {
			listener.enterIdentOrHole(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitIdentOrHole) {
			listener.exitIdentOrHole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitIdentOrHole) {
			return visitor.visitIdentOrHole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentOrStarContext extends ParserRuleContext {
	public MUL(): TerminalNode | undefined { return this.tryGetToken(TntParser.MUL, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(TntParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_identOrStar; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterIdentOrStar) {
			listener.enterIdentOrStar(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitIdentOrStar) {
			listener.exitIdentOrStar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitIdentOrStar) {
			return visitor.visitIdentOrStar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_path; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_argList; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterArgList) {
			listener.enterArgList(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitArgList) {
			listener.exitArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitArgList) {
			return visitor.visitArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalCallNameContext extends ParserRuleContext {
	public _op!: Token;
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(TntParser.IDENTIFIER, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(TntParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(TntParser.OR, 0); }
	public IFF(): TerminalNode | undefined { return this.tryGetToken(TntParser.IFF, 0); }
	public IMPLIES(): TerminalNode | undefined { return this.tryGetToken(TntParser.IMPLIES, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(TntParser.SET, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(TntParser.LIST, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(TntParser.MAP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_normalCallName; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterNormalCallName) {
			listener.enterNormalCallName(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitNormalCallName) {
			listener.exitNormalCallName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitNormalCallName) {
			return visitor.visitNormalCallName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameAfterDotContext extends ParserRuleContext {
	public _op!: Token;
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(TntParser.IDENTIFIER, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(TntParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(TntParser.OR, 0); }
	public IFF(): TerminalNode | undefined { return this.tryGetToken(TntParser.IFF, 0); }
	public IMPLIES(): TerminalNode | undefined { return this.tryGetToken(TntParser.IMPLIES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_nameAfterDot; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterNameAfterDot) {
			listener.enterNameAfterDot(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitNameAfterDot) {
			listener.exitNameAfterDot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitNameAfterDot) {
			return visitor.visitNameAfterDot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(TntParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(TntParser.OR, 0); }
	public IFF(): TerminalNode | undefined { return this.tryGetToken(TntParser.IFF, 0); }
	public IMPLIES(): TerminalNode | undefined { return this.tryGetToken(TntParser.IMPLIES, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(TntParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(TntParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(TntParser.GE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(TntParser.LE, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(TntParser.NE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(TntParser.EQ, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(TntParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(TntParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(TntParser.MOD, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(TntParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TntParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_operator; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(TntParser.STRING, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(TntParser.BOOL, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(TntParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_literal; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


