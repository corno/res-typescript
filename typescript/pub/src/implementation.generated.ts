import { API } from "./api.generated"
import { $$ as icreateApostrophedString } from "./implementations/createApostrophedString.native"
import { $$ as icreateBacktickedString } from "./implementations/createBacktickedString.native"
import { $$ as icreateIdentifier } from "./implementations/createIdentifier.native"
import { $$ as icreateQuotedString } from "./implementations/createQuotedString.native"
import { $$ as iescape } from "./implementations/escape.native"

export const $api: API = {
    'createApostrophedString': icreateApostrophedString,
    'createBacktickedString': icreateBacktickedString,
    'createIdentifier': icreateIdentifier,
    'createQuotedString': icreateQuotedString,
    'escape': iescape,
}