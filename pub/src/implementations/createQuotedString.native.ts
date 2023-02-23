import * as mapi from "../api"

export const $$: mapi.CcreateQuotedString = ($) => {
    return JSON.stringify($)
}