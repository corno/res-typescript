import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    sfunc,
    type,
    optional,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "CreateIdentifier": sfunc(typeReference("common", "String"), null, null, sdata(typeReference("common", "String"))),
            "CreateQuotedString": sfunc(typeReference("common", "String"), null, null, sdata(typeReference("common", "String"))),
            "CreateApostrophedString": sfunc(typeReference("common", "String"), null, null, sdata(typeReference("common", "String"))),
            "CreateBacktickedString": sfunc(typeReference("common", "String"), null, null, sdata(typeReference("common", "String"))),
        }),

    }],
}