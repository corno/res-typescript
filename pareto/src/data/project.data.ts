import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.wrapRawDictionary

import { $ as api } from "./api.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "provides functionality to support javascript code generation. helps create valid identifiers, quoted strings etcetera",
    'license': "ISC",
    
    'dependencies': d({
        "glo-pareto-common": {},
    }),
    'type': ['resource', {
        'definition': api,
        'nativeDependencies': d({}),
        'devDependencies': d({
        }),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}