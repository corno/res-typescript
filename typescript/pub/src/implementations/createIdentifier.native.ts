import * as pi from 'pareto-core-internals'



import { CcreateIdentifier } from "../api"

export const $$:CcreateIdentifier = ($) => {
    if ($ === "") {
        return "_empty"
    }
    const reservedKeywords = [
        //Reserved Words
        "break",
        "case",
        "catch",
        "class",
        "const",
        "continue",
        "debugger",
        "default",
        "delete",
        "do",
        "else",
        "enum",
        "export",
        "extends",
        "false",
        "finally",
        "for",
        "function",
        "if",
        "import",
        "in",
        "instanceof",
        "new",
        "null",
        "return",
        "super",
        "switch",
        "this",
        "throw",
        "true",
        "try",
        "typeof",
        "var",
        "void",
        "while",
        "with",
        //Strict Mode Reserved Words
        "as",
        "implements",
        "interface",
        "let",
        "package",
        "private",
        "protected",
        "public",
        "static",
        "yield",
        //Contextual Keywords
        "any",
        "boolean",
        "constructor",
        "declare",
        "get",
        "module",
        "require",
        "number",
        "set",
        "string",
        "symbol",
        "type",
        "from",
        "of",
        //???
        "unknown",
        "object",
    ]
    if (reservedKeywords.indexOf($) > -1) {
        return `_l${$}`
    }
    let out = ""
    let start = 0
    if ($.charCodeAt(0) >= 48 && $.charCodeAt(0) <= 57) {
        //begins with 0-9
        start = 1
        out += "_"
        out += $[0]
    }
    for (let i = start; i !== $.length; i += 1) {
        const charCode = $.charCodeAt(i)
        const char = $.charAt(i)
        if (false
            || charCode === 36 //$
            || charCode >= 48 && charCode <= 57 //0-9
            || charCode >= 65 && charCode <= 90 //A-Z
            || charCode >= 97 && charCode <= 122//a-z
        ) {
            //normal character
            out += char
        } else {
            switch (char) {
                case " ": out += "__"; break;
                case "_": out += "_$"; break;

                case "&": out += "_am"; break;
                case "'": out += "_ap"; break;
                case "@": out += "_at"; break;
                case "[": out += "_bo"; break;
                case "]": out += "_bc"; break;
                case "\\":out += "_bs"; break;
                case "`": out += "_bt"; break;
                case "^": out += "_ca"; break;
                case "}": out += "_cc"; break;
                case ":": out += "_cl"; break;
                case ",": out += "_cm"; break;
                case "{": out += "_co"; break;
                case "=": out += "_eq"; break;
                case "!": out += "_ex"; break;
                case ">": out += "_gt"; break;
                case "#": out += "_ha"; break;
                case "-": out += "_mi"; break;
                case ")": out += "_pc"; break;
                case ".": out += "_pe"; break;
                case "(": out += "_po"; break;
                case "+": out += "_pl"; break;
                case "%": out += "_pt"; break;
                case "\"":out += "_qo"; break;
                case "?": out += "_qu"; break;
                case ";": out += "_sc"; break;
                case "/": out += "_sl"; break;
                case "*": out += "_sr"; break;
                case "<": out += "_st"; break;
                case "~": out += "_ti"; break;
                case "|": out += "_vb"; break;

                default: pi.panic(`unhandled character: "${char}"`)
            }
        }
    }
    return out
}