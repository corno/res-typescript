import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"

export type FCreateApostrophedString = ($: mcommon.TString,) => mcommon.TString

export type FCreateBacktickedString = ($: mcommon.TString,) => mcommon.TString

export type FCreateIdentifier = ($: mcommon.TString,) => mcommon.TString

export type FCreateQuotedString = ($: mcommon.TString,) => mcommon.TString