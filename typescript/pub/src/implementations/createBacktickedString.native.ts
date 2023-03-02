import * as pi from 'pareto-core-internals'
import { CcreateBacktickedString } from "../definition/api.generated"

export const $$:CcreateBacktickedString = ($) => {
    const jsonString = JSON.stringify($)
    return `\`${jsonString.substring(1, jsonString.length - 1).replace(/`/g, "\\`")}\``
}