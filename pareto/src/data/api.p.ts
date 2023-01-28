import * as pr from 'pareto-core-raw'
import {
    nested,
    array,
    typeReference,
    callback,
    interfaceReference,
    procedure,
    null_,
    method, dictionary, group, member, taggedUnion, types, _function
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

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
            "CreateIdentifier": _function(typeReference("common", "String"), typeReference("common", "String")),
            "CreateQuotedString": _function(typeReference("common", "String"), typeReference("common", "String")),
            "CreateApostrophedString": _function(typeReference("common", "String"), typeReference("common", "String")),
            "CreateBacktickedString": _function(typeReference("common", "String"), typeReference("common", "String")),
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