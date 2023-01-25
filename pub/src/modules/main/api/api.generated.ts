import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"


export type CcreateApostrophedString = glo.FEscapeIdentifier

export type CcreateQuotedString = glo.FEscapeIdentifier

export type CescapeTypescriptIdentifier = glo.FEscapeIdentifier

export type API = {
    createApostrophedString: CcreateApostrophedString
    createQuotedString: CcreateQuotedString
    escapeTypescriptIdentifier: CescapeTypescriptIdentifier
}