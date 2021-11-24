import { NodeHtmlMarkdownOptions } from './options';
import { NodeMetadata, NodeMetadataMap, Visitor } from './visitor';
import { ElementNode } from './nodes';
export declare type TranslatorConfigFactory = {
    (ctx: TranslatorContext): TranslatorConfig;
    base?: TranslatorConfig;
};
export declare type TranslatorConfigObject = {
    [tags: string]: TranslatorConfig | TranslatorConfigFactory;
};
export declare type TranslatorContext = Partial<NodeMetadata> & {
    node: ElementNode;
    options: NodeHtmlMarkdownOptions;
    parent?: ElementNode;
    nodeMetadata: NodeMetadataMap;
    visitor: Visitor;
    base?: TranslatorConfig;
};
export declare type TranslatorConfig = {
    /**
     * Preceeds content, follows surroundingNewLines
     */
    prefix?: string;
    /**
     * Follows content, preceeds surroundingNewLines
     */
    postfix?: string;
    /**
     * Set fixed output content
     */
    content?: string;
    /**
     * Post-process content after inner nodes have been rendered.
     * Returning undefined will cause the content to not be updated
     */
    postprocess?: (ctx: TranslatorContext & {
        content: string;
    }) => string | PostProcessResult;
    /**
     * If false, no child elements will be scanned
     * @default true
     */
    recurse?: boolean;
    /**
     * Adds newline before and after (true, false, or number of newlines to add per side)
     * @default false
     */
    surroundingNewlines?: boolean | number;
    /**
     * Ignore node entirely
     */
    ignore?: boolean;
    /**
     * Do not escape content
     */
    noEscape?: boolean;
    /**
     * If first character matches end of the last written data, add a space
     * @example
     * // old text: **abc**
     * // new text: **def**
     * // becomes: **abc** **def**
     */
    spaceIfRepeatingChar?: boolean;
};
export declare enum PostProcessResult {
    NoChange = 0,
    RemoveNode = 1
}
export declare class TranslatorCollection {
    get size(): number;
    /**
     * Add / update translator config for one or more element tags
     */
    set(keys: string, config: TranslatorConfig | TranslatorConfigFactory, /* @internal */ preserveBase?: boolean): void;
    /**
     * Get translator config for element tag
     */
    get(key: string): TranslatorConfig | TranslatorConfigFactory;
    /**
     * Returns array of entries
     */
    entries(): [elementName: string, config: TranslatorConfig | TranslatorConfigFactory][];
    /**
     * Remove translator config for one or more element tags
     */
    remove(keys: string): void;
}
/**
 * Only use to narrow union of types where only TranslatorConfig has JS type 'object'
 */
export declare const isTranslatorConfig: (v: any) => v is TranslatorConfig;
export declare function createTranslatorContext(visitor: Visitor, node: ElementNode, metadata?: NodeMetadata, base?: TranslatorConfig): TranslatorContext;
