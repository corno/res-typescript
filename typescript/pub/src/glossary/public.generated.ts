import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type CreateApostrophedString = ($: g_common.T.String,) => g_common.T.String
    
    export type CreateBacktickedString = ($: g_common.T.String,) => g_common.T.String
    
    export type CreateIdentifier = ($: g_common.T.String,) => g_common.T.String
    
    export type CreateQuotedString = ($: g_common.T.String,) => g_common.T.String
}