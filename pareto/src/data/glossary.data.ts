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
    'glossary parameters':d({}),
    'imports': d({
        "common": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "CreateIdentifier": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
            "CreateQuotedString": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
            "CreateApostrophedString": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
            "CreateBacktickedString": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
        }),
    },

}