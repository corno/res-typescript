import * as pi from 'pareto-core-internals'
import * as api from "../api"

export const $$: api.CcreateBacktickedString = ($) => {
    const jsonString = JSON.stringify($)
    return `\`${jsonString.substring(1, jsonString.length - 1).replace(/`/g, "\\`")}\``
}