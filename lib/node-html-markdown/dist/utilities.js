"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perfStop = exports.perfStart = exports.getChildNodes = exports.parseHTML = exports.truthyStr = exports.getTrailingWhitespaceInfo = exports.isWhiteSpaceOnly = exports.surround = exports.trimNewLines = void 0;
const config_1 = require("./config");
/* ****************************************************************************************************************** */
// region: String Utils
/* ****************************************************************************************************************** */
const trimNewLines = (s) => s.replace(/^\n+|\n+$/g, '');
exports.trimNewLines = trimNewLines;
const surround = (source, surroundStr) => `${surroundStr}${source}${surroundStr}`;
exports.surround = surround;
const isWhiteSpaceOnly = (s) => !/\S/.test(s);
exports.isWhiteSpaceOnly = isWhiteSpaceOnly;
const getTrailingWhitespaceInfo = (s) => {
    const res = { whitespace: 0, newLines: 0 };
    const minI = Math.max(s.length - 10, 0);
    for (let i = s.length - 1; i >= minI; i--) {
        const token = s.slice(i, i + 1);
        if (!/\s/.test(token))
            break;
        res.whitespace++;
        if (['\r', '\n'].includes(token))
            ++res.newLines;
    }
    return res;
};
exports.getTrailingWhitespaceInfo = getTrailingWhitespaceInfo;
/**
 * If value is truthy, returns `value` (or `v` if no `value` provided), otherwise, returns an empty string
 * @param v - Var to check for truthiness
 * @param value - Value to return if true
 */
const truthyStr = (v, value) => v ? ((value !== undefined) ? value : String(v)) : '';
exports.truthyStr = truthyStr;
// endregion
/* ****************************************************************************************************************** */
// region: Parser
/* ****************************************************************************************************************** */
function tryParseWithNativeDom(html) {
    try {
        if (!((window === null || window === void 0 ? void 0 : window.DOMParser) && (new window.DOMParser()).parseFromString('', 'text/html')))
            return void 0;
    }
    catch (_a) {
        return void 0;
    }
    /* Get a document */
    let doc;
    try {
        doc = document.implementation.createHTMLDocument('').open();
    }
    catch (e) {
        const { ActiveXObject } = window;
        if (ActiveXObject) {
            const doc = ActiveXObject('htmlfile');
            doc.designMode = 'on'; // disable on-page scripts
            return doc.open();
        }
        throw e;
    }
    // Prepare document, ensuring we have a wrapper node
    doc.write('<node-html-markdown>' + html + '</node-html-markdown>');
    doc.close();
    return doc.documentElement;
}
const getNodeHtmlParser = () => {
    try {
        return require('node-html-parser').parse;
    }
    catch (_a) {
        return undefined;
    }
};
/**
 * Parser string to HTMLElement
 */
function parseHTML(html, options) {
    let nodeHtmlParse;
    /* If specified, try to parse with native engine, fallback to node-html-parser */
    perfStart('parse');
    let el;
    if (options.preferNativeParser) {
        try {
            el = tryParseWithNativeDom(html);
        }
        catch (e) {
            nodeHtmlParse = getNodeHtmlParser();
            if (nodeHtmlParse)
                console.warn('Native DOM parser encountered an error during parse', e);
            else
                throw e;
        }
    }
    else
        nodeHtmlParse = getNodeHtmlParser();
    if (!el)
        el = nodeHtmlParse(html, config_1.nodeHtmlParserConfig).removeWhitespace();
    perfStop('parse');
    return el;
}
exports.parseHTML = parseHTML;
function getChildNodes(node) {
    if (!isNodeList(node.childNodes))
        return node.childNodes;
    const res = [];
    node.childNodes.forEach(n => res.push(n));
    return res;
    function isNodeList(v) {
        return (v != null) || (typeof v[Symbol.iterator] === 'function');
    }
}
exports.getChildNodes = getChildNodes;
function perfStart(label) {
    if (process.env.LOG_PERF)
        console.time(label);
}
exports.perfStart = perfStart;
function perfStop(label) {
    if (process.env.LOG_PERF)
        console.timeEnd(label);
}
exports.perfStop = perfStop;
// endregion
//# sourceMappingURL=utilities.js.map
