import * as pi from 'pareto-core-internals'
import { A } from "../api.generated"

export const $$: A. createBacktickedString = ($) => {
    const jsonString = JSON.stringify($)
    return `\`${jsonString.substring(1, jsonString.length - 1).replace(/`/g, "\\`")}\``
}