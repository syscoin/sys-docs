// Publish the human-reviewed Markdown with links that work outside Docusaurus.
const {readFileSync, writeFileSync} = require('node:fs');
const path = require('node:path');
const {url, baseUrl} = require('../docusaurus.config.js');

const root = path.resolve(__dirname, '..');
const source = readFileSync(path.join(root, 'docs/intro/status.mdx'), 'utf8');
const [, frontMatter, body] = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
const [, title] = frontMatter.match(/^title: (.+)$/m);
const site = new URL(baseUrl, url);
const page = new URL('docs/intro/status', site);
const markdown = body.replace(/\]\((\.\.?\/[^)\s]+)\)/g, (_, target) => {
  const destination = new URL(target, page);
  const pathname = destination.pathname.slice(site.pathname.length);
  if (pathname.startsWith('static/')) {
    destination.pathname = site.pathname + pathname.slice('static/'.length);
  } else if (pathname.startsWith('docs/') && pathname.endsWith('.mdx')) {
    destination.pathname = destination.pathname.slice(0, -'.mdx'.length);
  } else {
    throw new Error('Unsupported relative link in the network status register: ' + target);
  }
  return '](' + destination.href + ')';
});

const output = '# ' + title + '\n\n[Canonical status page](' + page.href + ')\n\n' + markdown.trim() + '\n';
writeFileSync(path.join(root, 'static/llms.txt'), output);
