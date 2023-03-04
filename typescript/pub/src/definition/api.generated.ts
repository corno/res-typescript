import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type createApostrophedString = g_this.F.CreateBacktickedString

export type createBacktickedString = g_this.F.CreateApostrophedString

export type createIdentifier = g_this.F.CreateIdentifier

export type createQuotedString = g_this.F.CreateQuotedString

export type API = {
    createApostrophedString: createApostrophedString
    createBacktickedString: createBacktickedString
    createIdentifier: createIdentifier
    createQuotedString: createQuotedString
}