import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CcreateApostrophedString = gthis.FCreateBacktickedString

export type CcreateBacktickedString = gthis.FCreateApostrophedString

export type CcreateIdentifier = gthis.FCreateIdentifier

export type CcreateQuotedString = gthis.FCreateQuotedString

export type API = {
    createApostrophedString: CcreateApostrophedString
    createBacktickedString: CcreateBacktickedString
    createIdentifier: CcreateIdentifier
    createQuotedString: CcreateQuotedString
}