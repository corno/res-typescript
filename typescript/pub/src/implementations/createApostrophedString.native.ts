

import { CcreateApostrophedString } from "../definition/api.generated"

export const $$:CcreateApostrophedString = ($) => {
    const jsonString = JSON.stringify($)
    return `'${jsonString.substring(1, jsonString.length - 1).replace(/'/g, "\\'")}'`
}