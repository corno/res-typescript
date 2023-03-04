import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
    }),
    'builders': d({
    }),
    'interfaces': d({
    }),
    'functions': d({
        "CreateIdentifier": func(typeReference("common", "String"), null, null, data( typeReference("common", "String"), false)),
        "CreateQuotedString": func(typeReference("common", "String"), null, null, data(  typeReference("common", "String"), false)),
        "CreateApostrophedString": func(typeReference("common", "String"),  null, null, data( typeReference("common", "String"), false)),
        "CreateBacktickedString": func(typeReference("common", "String"),  null, null, data( typeReference("common", "String"), false)),
    }),
}