import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace EscapeParameters {
        
        export type escape = string
        
        export namespace patterns__to__escape {
            
            export type A = string
        }
        
        export type patterns__to__escape = pt.Array<string>
        
        export type _lstring = string
    }
    
    export type EscapeParameters = {
        readonly 'escape': string
        readonly 'patterns to escape': pt.Array<string>
        readonly 'string': string
    }
}