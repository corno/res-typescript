import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

import { external, main, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "provides functionality to support javascript code generation. helps create valid identifiers, quoted strings etcetera",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
    }),
    'type': ['resource', {
        'glossary': {
            'root': glossary,
            'imports': d({
                "common": external("glo-pareto-common"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                //"common": external("glo-pareto-common"),
                "this": this_(),
            }),
        },
        'nativeDependencies': d({}),
        'devDependencies': d({
        }),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'parameters': d({}),
                'imports': d({}),
                'types': d({}),
                'type': ['synchronous', {
                    'builders': d({}),
                    'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),
                }],
            },
            'imports': d({}),
        }
    }],
}