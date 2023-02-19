import * as pd from 'pareto-core-data'
import {
    nested,
    array,
    typeReference,
    interfaceReference,
    null_,
    method, dictionary, group, member, taggedUnion, types, func, data,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: mmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'types': d({
        }),
        'interfaces': d({
        }),
        'functions': d({
            "CreateIdentifier": func(typeReference("common", "String"), null, null, data( typeReference("common", "String"), false)),
            "CreateQuotedString": func(typeReference("common", "String"), null, null, data(  typeReference("common", "String"), false)),
            "CreateApostrophedString": func(typeReference("common", "String"),  null, null, data( typeReference("common", "String"), false)),
            "CreateBacktickedString": func(typeReference("common", "String"),  null, null, data( typeReference("common", "String"), false)),
        }),
    },
    'api': {
        'imports': d({
            //"common": "glo-pareto-common",
        }),
        'algorithms': d({
            "createIdentifier":algorithm( definitionReference("CreateIdentifier")),
            "createQuotedString": algorithm( definitionReference("CreateQuotedString")),
            "createApostrophedString": algorithm( definitionReference("CreateBacktickedString")),
            "createBacktickedString": algorithm(definitionReference("CreateApostrophedString")),
        })
    },
}