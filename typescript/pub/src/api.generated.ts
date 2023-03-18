import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"
export namespace A {
    
    export type createApostrophedString = g_this.SYNC.F.CreateBacktickedString
    
    export type createBacktickedString = g_this.SYNC.F.CreateApostrophedString
    
    export type createIdentifier = g_this.SYNC.F.CreateIdentifier
    
    export type createQuotedString = g_this.SYNC.F.CreateQuotedString
}

export type API = {
    createApostrophedString: A.createApostrophedString
    createBacktickedString: A.createBacktickedString
    createIdentifier: A.createIdentifier
    createQuotedString: A.createQuotedString
}