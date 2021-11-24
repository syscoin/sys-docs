import { NodeHtmlMarkdownOptions } from './options';
import { TranslatorCollection, TranslatorConfigObject } from './translator';
export declare type FileCollection = {
    [fileName: string]: string;
};
declare type Options = Partial<NodeHtmlMarkdownOptions>;
export declare class NodeHtmlMarkdown {
    translators: TranslatorCollection;
    readonly options: NodeHtmlMarkdownOptions;
    constructor(options?: Options, customTranslators?: TranslatorConfigObject);
    /**
     * Translate HTML source text to markdown
     */
    static translate(html: string, options?: Options, customTranslators?: TranslatorConfigObject): string;
    /**
     * Translate collection of HTML source text to markdown
     */
    static translate(files: FileCollection, options?: Options, customTranslators?: TranslatorConfigObject): FileCollection;
    /**
     * Translate HTML source text to markdown
     */
    translate(html: string): string;
    /**
     * Translate collection of HTML source text to markdown
     */
    translate(files: FileCollection): FileCollection;
    private translateWorker;
}
export {};
