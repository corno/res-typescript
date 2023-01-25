import { API } from "./api"
import { $$ as icreateApostrophedString } from "./implementations/createApostrophedString.native"
import { $$ as icreateQuotedString } from "./implementations/createQuotedString.native"
import { $$ as iescapeTypescriptIdentifier } from "./implementations/escapeTypescriptIdentifier.native"

export const $a: API = {
    'createApostrophedString': icreateApostrophedString,
    'createQuotedString': icreateQuotedString,
    'escapeTypescriptIdentifier': iescapeTypescriptIdentifier,
}