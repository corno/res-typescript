import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.escape = () => {
    return ($) => {
        const params = $
        let out = $.string
        if (out.startsWith($.escape)) {
            out = `${params.escape}${out}`
        }
        $['patterns to escape'].__forEach((key) => {
            if (out.startsWith(key)) {
                out = `${params.escape}${out}`
            }
        })
        return out
    }
}