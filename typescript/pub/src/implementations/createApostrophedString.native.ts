

import { A } from "../api.generated"

export const $$: A.createApostrophedString = () => {
    return ($) => {
        const jsonString = JSON.stringify($)
        return `'${jsonString.substring(1, jsonString.length - 1).replace(/'/g, "\\'")}'`
    }
}