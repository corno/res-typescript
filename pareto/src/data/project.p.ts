import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.p"

export const $: mproject.TProject = {
    'name': "res-typescript",

    'author': "Corno",
    'description': "provides functionality to support javascript code generation. helps create valid identifiers, quoted strings etcetera",
    'license': "ISC",

    'type': ['resource',  {
        'devDependencies': d({}),
    }],
    'modules': d({
        "main": {
            'definition': api,

        },
    }),
    'main': "main",
    'pubdependencies': d({
        "glo-pareto-common": {},
    }),
    'testdependencies': d({}),
}