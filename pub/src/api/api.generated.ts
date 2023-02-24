import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CcreateApostrophedString = gglo.FCreateBacktickedString

export type CcreateBacktickedString = gglo.FCreateApostrophedString

export type CcreateIdentifier = gglo.FCreateIdentifier

export type CcreateQuotedString = gglo.FCreateQuotedString

export type API = {
    createApostrophedString: CcreateApostrophedString
    createBacktickedString: CcreateBacktickedString
    createIdentifier: CcreateIdentifier
    createQuotedString: CcreateQuotedString
}