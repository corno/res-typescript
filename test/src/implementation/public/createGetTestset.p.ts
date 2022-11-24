
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../../interface"


import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset = ($d) => {
    return () => {

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
        function createTest(name: string, expected: string, actual: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["simple string", {
                        expected: expected,
                        actual: actual,
                    }]
                }]
            })
        }
        function createBooleanTest(name: string, test: boolean) {
            builder.add(name, {
                type: ["test", {
                    type: ["boolean", {
                        test: test
                    }]
                }]
            })
        }
        function fail(name: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["boolean", {
                        test: false
                    }]
                }]
            })
        }



        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    }
}