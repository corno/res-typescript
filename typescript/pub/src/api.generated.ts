import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type createApostrophedString = g_this.SYNC.A.F.CreateBacktickedString
    
    export type createBacktickedString = g_this.SYNC.A.F.CreateApostrophedString
    
    export type createIdentifier = g_this.SYNC.A.F.CreateIdentifier
    
    export type createQuotedString = g_this.SYNC.A.F.CreateQuotedString
}

export type API = {
    createApostrophedString: A.createApostrophedString
    createBacktickedString: A.createBacktickedString
    createIdentifier: A.createIdentifier
    createQuotedString: A.createQuotedString
}