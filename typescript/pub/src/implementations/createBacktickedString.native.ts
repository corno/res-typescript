import * as pi from 'pareto-core-internals'
import {createBacktickedString } from "../definition/api.generated"

export const $$: createBacktickedString = ($) => {
    const jsonString = JSON.stringify($)
    return `\`${jsonString.substring(1, jsonString.length - 1).replace(/`/g, "\\`")}\``
}