"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkdownForHtmlNodes = exports.Visitor = void 0;
const nodes_1 = require("./nodes");
const utilities_1 = require("./utilities");
const translator_1 = require("./translator");
const config_1 = require("./config");
// endregion
/* ****************************************************************************************************************** */
// region: Visitor
/* ****************************************************************************************************************** */
/**
 * Properties & methods marked public are designated as such due to the fact that we may add middleware / transformer
 * support in the future
 */
class Visitor {
    constructor(instance, rootNode, fileName) {
        this.instance = instance;
        this.rootNode = rootNode;
        this.fileName = fileName;
        this.nodeMetadata = new Map();
        this.result = {
            text: '',
            trailingNewlineStats: {
                whitespace: 0,
                newLines: 0
            }
        };
        this.options = instance.options;
        this.optimizeTree(rootNode);
        this.visitNode(rootNode);
    }
    /* ********************************************************* */
    // region: Methods
    /* ********************************************************* */
    appendResult(s, startPos, spaceIfRepeatingChar) {
        if (!s && startPos === undefined)
            return;
        const { result } = this;
        if (startPos !== undefined)
            result.text = result.text.substr(0, startPos);
        result.text += (spaceIfRepeatingChar && result.text.slice(-1) === s[0] ? ' ' : ' ') + s;

        result.trailingNewlineStats = utilities_1.getTrailingWhitespaceInfo(result.text);
    }
    appendNewlines(count) {
        const { newLines } = this.result.trailingNewlineStats;
        this.appendResult('\n'.repeat(Math.max(0, (+count - newLines))));
    }
    // endregion
    /* ********************************************************* */
    // region: Internal Methods
    /* ********************************************************* */
    /**
     * Optimize tree, flagging nodes that have usable content
     */
    optimizeTree(node) {
        utilities_1.perfStart('Optimize tree');
        (function visit(node) {
            let res = false;
            if (nodes_1.isTextNode(node) || (nodes_1.isElementNode(node) && config_1.contentlessElements.includes(node.tagName))) {
                res = true;
            }
            else {
                for (const child of utilities_1.getChildNodes(node)) {
                    if (!res)
                        res = visit(child);
                    else
                        visit(child);
                }
            }
            return node.preserve = res;
        })(node);
        utilities_1.perfStop('Optimize tree');
    }
    /**
     * Apply escaping and custom replacement rules
     */
    processText(text) {
        const { lineStartEscape, globalEscape, textReplace } = this.options;
        let res = text
            .replace(globalEscape[0], globalEscape[1])
            .replace(lineStartEscape[0], lineStartEscape[1]);
        if (!textReplace)
            return res;
        /* If specified, apply custom replacement patterns */
        for (const [pattern, r] of textReplace)
            res = res.replace(pattern, r);
        return res;
    }
    visitNode(node, textOnly, metadata) {
        var _a, _b;
        const { result } = this;
        //console.log(metadata)
        /* Handle text node */
        if (nodes_1.isTextNode(node) && !node.isWhitespace)
            return this.appendResult((metadata === null || metadata === void 0 ? void 0 : metadata.noEscape) ? node.text : this.processText(node.text));
        if (!node.preserve)
            return;
        if (textOnly || !nodes_1.isElementNode(node))
            return;
        /* Handle element node */
        const { instance: { translators } } = this;
        const translatorCfgOrFactory = translators[node.tagName];
        /* Update metadata with list detail */
        switch (node.tagName) {
            case 'UL':
            case 'OL':
                metadata = Object.assign(Object.assign({}, metadata), { listItemNumber: 0, listKind: node.tagName, indentLevel: ((_a = metadata === null || metadata === void 0 ? void 0 : metadata.indentLevel) !== null && _a !== void 0 ? _a : -1) + 1 });
                break;
            case 'LI':
                if ((metadata === null || metadata === void 0 ? void 0 : metadata.listKind) === 'OL')
                    metadata.listItemNumber = ((_b = metadata.listItemNumber) !== null && _b !== void 0 ? _b : 0) + 1;
        }
        if (metadata)
            this.nodeMetadata.set(node, metadata);
        // If no translator for element, visit children
        if (!translatorCfgOrFactory) {
            for (const child of utilities_1.getChildNodes(node))
                this.visitNode(child, textOnly, metadata);
            return;
        }
        /* Get Translator Config */
        let cfg;
        let ctx;
        if (!translator_1.isTranslatorConfig(translatorCfgOrFactory)) {
            ctx = translator_1.createTranslatorContext(this, node, metadata, translatorCfgOrFactory.base);
            cfg = Object.assign(Object.assign({}, translatorCfgOrFactory.base), translatorCfgOrFactory(ctx));
        }
        else
            cfg = translatorCfgOrFactory;
        // Skip and don't check children if ignore flag set
        if (cfg.ignore)
            return;
        /* Update metadata for noEscape flag */
        if (cfg.noEscape && !(metadata === null || metadata === void 0 ? void 0 : metadata.noEscape)) {
            metadata = Object.assign(Object.assign({}, metadata), { noEscape: true });
            this.nodeMetadata.set(node, metadata);
        }
        const startPosOuter = result.text.length;
        /* Write opening */
        if (cfg.surroundingNewlines)
            this.appendNewlines(+cfg.surroundingNewlines);
        if (cfg.prefix)
            this.appendResult(cfg.prefix);
        /* Write inner content */
        if (typeof cfg.content === 'string')
            this.appendResult(cfg.content, void 0, cfg.spaceIfRepeatingChar);
        else {
            const startPos = result.text.length;
            // Process child nodes
            for (const child of utilities_1.getChildNodes(node))
                this.visitNode(child, (cfg.recurse === false), metadata);
            /* Apply translator post-processing */
            if (cfg.postprocess) {
                const postRes = cfg.postprocess(Object.assign(Object.assign({}, (ctx || translator_1.createTranslatorContext(this, node, metadata))), { content: result.text.substr(startPos) }));
                // If remove flag sent, remove / omit everything for this node (prefix, newlines, content, postfix)
                if (postRes === translator_1.PostProcessResult.RemoveNode) {
                    if (node.tagName === 'LI' && (metadata === null || metadata === void 0 ? void 0 : metadata.listItemNumber))
                        --metadata.listItemNumber;
                    return this.appendResult('', startPosOuter);
                }
                if (typeof postRes === 'string')
                    this.appendResult(postRes, startPos, cfg.spaceIfRepeatingChar);
            }
        }
        /* Write closing */
        if (cfg.postfix)
            this.appendResult(cfg.postfix);
        if (cfg.surroundingNewlines)
            this.appendNewlines(+cfg.surroundingNewlines);
    }
}
exports.Visitor = Visitor;
// endregion
/* ****************************************************************************************************************** */
// region: Utilities
/* ****************************************************************************************************************** */
function getMarkdownForHtmlNodes(instance, rootNode, fileName) {
    utilities_1.perfStart('walk');
    let result = new Visitor(instance, rootNode, fileName).result.text;
    utilities_1.perfStop('walk');
    const { maxConsecutiveNewlines } = instance.options;
    if (maxConsecutiveNewlines)
        result = result.replace(new RegExp(String.raw `(?:\r?\n\s*)+((?:\r?\n\s*){${maxConsecutiveNewlines}})`, 'g'), '$1');
    return utilities_1.trimNewLines(result);
}
exports.getMarkdownForHtmlNodes = getMarkdownForHtmlNodes;
// endregion
//# sourceMappingURL=visitor.js.map
