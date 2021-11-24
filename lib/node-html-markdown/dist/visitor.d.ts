import { NodeHtmlMarkdown } from './main';
import { ElementNode, HtmlNode } from './nodes';
export declare type NodeMetadata = {
    indentLevel?: number;
    listKind?: 'OL' | 'UL';
    listItemNumber?: number;
    noEscape?: boolean;
};
export declare type NodeMetadataMap = Map<ElementNode, NodeMetadata>;
declare type VisitorResult = {
    text: string;
    trailingNewlineStats: {
        whitespace: number;
        newLines: number;
    };
};
/**
 * Properties & methods marked public are designated as such due to the fact that we may add middleware / transformer
 * support in the future
 */
export declare class Visitor {
    instance: NodeHtmlMarkdown;
    rootNode: HtmlNode;
    fileName?: string | undefined;
    result: VisitorResult;
    nodeMetadata: NodeMetadataMap;
    private options;
    constructor(instance: NodeHtmlMarkdown, rootNode: HtmlNode, fileName?: string | undefined);
    appendResult(s: string, startPos?: number, spaceIfRepeatingChar?: boolean): void;
    appendNewlines(count: number): void;
    /**
     * Optimize tree, flagging nodes that have usable content
     */
    private optimizeTree;
    /**
     * Apply escaping and custom replacement rules
     */
    private processText;
    visitNode(node: HtmlNode, textOnly?: boolean, metadata?: NodeMetadata): void;
}
export declare function getMarkdownForHtmlNodes(instance: NodeHtmlMarkdown, rootNode: HtmlNode, fileName?: string): string;
export {};
