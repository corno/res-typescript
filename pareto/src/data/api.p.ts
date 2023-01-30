import * as pr from 'pareto-core-raw'
import {
    nested,
    array,
    typeReference,
    interfaceReference,
    null_,
    method, dictionary, group, member, taggedUnion, types, func, data,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
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