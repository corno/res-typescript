import * as pd from 'pareto-core-data'

import {
    data,
    imp,
    externalTypeReference,
    sfunction,
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
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({
            "CreateIdentifier": sfunction(data(externalTypeReference("common", "String")), externalTypeReference("common", "String")),
            "CreateQuotedString": sfunction(data(externalTypeReference("common", "String")), externalTypeReference("common", "String")),
            "CreateApostrophedString": sfunction(data(externalTypeReference("common", "String")), externalTypeReference("common", "String")),
            "CreateBacktickedString": sfunction(data(externalTypeReference("common", "String")), externalTypeReference("common", "String")),
        }),
    },

}