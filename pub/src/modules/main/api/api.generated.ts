import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"


export type CcreateApostrophedString = glo.FCreateBacktickedString

export type CcreateBacktickedString = glo.FCreateApostrophedString

export type CcreateIdentifier = glo.FCreateIdentifier

export type CcreateQuotedString = glo.FCreateQuotedString

export type API = {
    createApostrophedString: CcreateApostrophedString
    createBacktickedString: CcreateBacktickedString
    createIdentifier: CcreateIdentifier
    createQuotedString: CcreateQuotedString
}