import { API } from "./definition/api.generated"
import { $$ as icreateApostrophedString } from "./implementations/createApostrophedString.native"
import { $$ as icreateBacktickedString } from "./implementations/createBacktickedString.native"
import { $$ as icreateIdentifier } from "./implementations/createIdentifier.native"
import { $$ as icreateQuotedString } from "./implementations/createQuotedString.native"

export const $a: API = {
    'createApostrophedString': icreateApostrophedString,
    'createBacktickedString': icreateBacktickedString,
    'createIdentifier': icreateIdentifier,
    'createQuotedString': icreateQuotedString,
}