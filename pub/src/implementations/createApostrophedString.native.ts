import * as mapi from "../api"

export const $$: mapi.CcreateApostrophedString = ($) => {
    const jsonString = JSON.stringify($)
    return `'${jsonString.substring(1, jsonString.length - 1).replace(/'/g, "\\'")}'`
}