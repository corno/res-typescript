import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "createIdentifier":algorithm( functionReference("this", {}, "CreateIdentifier")),
        "createQuotedString": algorithm( functionReference("this", {}, "CreateQuotedString")),
        "createApostrophedString": algorithm( functionReference("this", {}, "CreateBacktickedString")),
        "createBacktickedString": algorithm(functionReference("this", {}, "CreateApostrophedString")),
    })
}