

import { createApostrophedString } from "../api.generated"

export const $$: createApostrophedString = ($) => {
    const jsonString = JSON.stringify($)
    return `'${jsonString.substring(1, jsonString.length - 1).replace(/'/g, "\\'")}'`
}