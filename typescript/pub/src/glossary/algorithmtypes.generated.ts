import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type CreateApostrophedString = ($: g_common.T.String) => g_common.T.String
        }
        
        
        export namespace F {
            export type CreateBacktickedString = ($: g_common.T.String) => g_common.T.String
        }
        
        
        export namespace F {
            export type CreateIdentifier = ($: g_common.T.String) => g_common.T.String
        }
        
        
        export namespace F {
            export type CreateQuotedString = ($: g_common.T.String) => g_common.T.String
        }
        
        
        export namespace F {
            export type Escape = ($: T.EscapeParameters) => g_common.T.String
        }
    }
}