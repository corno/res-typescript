
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

    function id(raw: string, formatted: string) {
        createTest(raw, formatted, pub.$a.escapeTypescriptIdentifier(raw))
    }
    function qu(raw: string, formatted: string) {
        createTest(raw, formatted, pub.$a.createQuotedString(raw))
    }
    function ap(raw: string, formatted: string) {
        createTest(raw, formatted, pub.$a.createApostrophedString(raw))
    }
    id("", "_empty")
    id("abc", "abc")
    id("while", "_lwhile")
    id("for", "_lfor")
    id("1mississippi", "_1mississippi")
    id("a1", "a1")
    id(" ", "__")
    id("_", "_$")
    id("a b", "a__b")
    id("a_b", "a_$b")
    id("a:b", "a_clb")
    id(":b", "_clb")
    
    qu("foo", '"foo"')
    qu("foo \" bar", '"foo \\" bar"')

    ap("foo2", "'foo2'")
    ap("foo2 ' bar", "'foo2 \\' bar'")

    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}