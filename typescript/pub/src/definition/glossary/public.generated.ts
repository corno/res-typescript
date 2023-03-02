import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FCreateApostrophedString = ($: gcommon.T.String,) => gcommon.T.String

export type FCreateBacktickedString = ($: gcommon.T.String,) => gcommon.T.String

export type FCreateIdentifier = ($: gcommon.T.String,) => gcommon.T.String

export type FCreateQuotedString = ($: gcommon.T.String,) => gcommon.T.String