

import { A } from "../api.generated"

export const $$: A.createQuotedString = () => {
    return ($) => {
        return JSON.stringify($)
    }
}