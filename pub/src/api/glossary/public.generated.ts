import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FCreateApostrophedString = ($: mcommon.T.String,) => mcommon.T.String

export type FCreateBacktickedString = ($: mcommon.T.String,) => mcommon.T.String

export type FCreateIdentifier = ($: mcommon.T.String,) => mcommon.T.String

export type FCreateQuotedString = ($: mcommon.T.String,) => mcommon.T.String