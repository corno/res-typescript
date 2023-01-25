
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../api"


import * as pub from "../../../../../pub"

export const $$: api.CgetTestSet = () => {

    const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
    function createTest(name: string, expected: string, actual: string) {
        builder.add(name, {
            type: ["test", {
                type: ["short string", {
                    expected: expected,
                    actual: actual,
                }]
            }]
        })
    }
    function createBooleanTest(name: string, test: boolean) {
        builder.add(name, {
            type: ["test", {
                type: ["boolean", test]
            }]
        })
    }
    function fail(name: string) {
        builder.add(name, {
            type: ["test", {
                type: ["boolean", false]
            }]
        })
    }

    function x(raw: string, formatted: string) {
        createTest(raw, formatted, pub.$a.escapeTypescriptIdentifier(raw))
    }
    x("", "_empty")
    x("abc", "abc")
    x("while", "_lwhile")
    x("for", "_lfor")
    x("1mississippi", "_1mississippi")
    x("a1", "a1")
    x(" ", "__")
    x("_", "_$")
    x("a b", "a__b")
    x("a_b", "a_$b")
    x("a:b", "a_clb")
    x(":b", "_clb")
    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}