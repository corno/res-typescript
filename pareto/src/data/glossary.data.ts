import * as pd from 'pareto-core-data'

import {
    data,
    imp,
    externalTypeReference,
    sfunction,
    type,
    group,
    typeReference,
    member,
    string,
    dictionary,
    null_,
    array,
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
            "EscapeParameters": type(group({
                "string": member(string()),
                "escape": member(string()),
                "patterns to escape": member(array(string())),
            }))
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "Escape": sfunction(externalTypeReference("common", "String"), data(typeReference("EscapeParameters"))),
            "CreateIdentifier": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
            "CreateQuotedString": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
            "CreateApostrophedString": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
            "CreateBacktickedString": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
        }),
    },

}