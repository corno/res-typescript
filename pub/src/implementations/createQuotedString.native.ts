import * as pi from 'pareto-core-internals'
import * as api from "../api"

export const $$: api.CcreateQuotedString = ($) => {
    return JSON.stringify($)
}