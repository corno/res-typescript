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
    imp,
    externalTypeReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "CreateIdentifier": sfunc(sdata(externalTypeReference("common", "String")), sdata(externalTypeReference("common", "String"))),
            "CreateQuotedString": sfunc(sdata(externalTypeReference("common", "String")), sdata(externalTypeReference("common", "String"))),
            "CreateApostrophedString": sfunc(sdata(externalTypeReference("common", "String")), sdata(externalTypeReference("common", "String"))),
            "CreateBacktickedString": sfunc(sdata(externalTypeReference("common", "String")), sdata(externalTypeReference("common", "String"))),
        }),

    }],
}