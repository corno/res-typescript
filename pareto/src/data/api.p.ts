import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    optional,
    array,
    typeReference,
    externalTypeReference,
    callback,
    interfaceReference,
    externalNamespacedTypeReference,
    procedure,
    null_,
    method,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary
const a = pr.wrapRawArray


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'namespace': {
            'types': types({
            }),
            'interfaces': d({
            }),

        },
        'functions': d({ 
            "CreateIdentifier": _function(externalTypeReference("common", "String"), externalTypeReference("common", "String")),
            "CreateQuotedString": _function(externalTypeReference("common", "String"), externalTypeReference("common", "String")),
            "CreateApostrophedString": _function(externalTypeReference("common", "String"), externalTypeReference("common", "String")),
            "CreateBacktickedString": _function(externalTypeReference("common", "String"), externalTypeReference("common", "String")),
            }),
    },
    'api': {
        'imports': d({
            //"common": "glo-pareto-common",
        }),
        'algorithms': d({
            "createIdentifier": {
                'definition': definitionReference("CreateIdentifier"),
                'type': ['reference', null],
            },
            "createQuotedString": {
                'definition': definitionReference("CreateQuotedString"),
                'type': ['reference', null],
            },
            "createApostrophedString": {
                'definition': definitionReference("CreateBacktickedString"),
                'type': ['reference', null],
            },
            "createBacktickedString": {
                'definition': definitionReference("CreateApostrophedString"),
                'type': ['reference', null],
            },
        })
    },
}