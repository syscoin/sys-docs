// Assemble the agent reference from the same Markdown developers read on the site.
const {readFileSync, writeFileSync} = require('node:fs');
const path = require('node:path');
const {url, baseUrl} = require('../docusaurus.config.js');

const root = path.resolve(__dirname, '..');
const site = new URL(baseUrl, url);
const pages = [
  {route: 'docs/reference/overview'},
  {route: 'docs/reference/zksys', before: '## Trace a public testnet transaction'},
  {route: 'docs/reference/nevm'},
  {route: 'docs/dev-resources/documentation/javascript-sdk-ref/syscoinjs'},
  {route: 'docs/intro/nutshell', before: '## Why build on Bitcoin mining?'},
  {route: 'docs/intro/status'},
];

function renderPage({route, before}) {
  const source = readFileSync(path.join(root, route + '.mdx'), 'utf8');
  const [, frontMatter, body] = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  const [, title] = frontMatter.match(/^title: (.+)$/m);
  const page = new URL(route, site);
  const lines = body.trim().split(/\r?\n/);
  const end = before ? lines.indexOf(before) : lines.length;
  if (end < 0) throw new Error('Missing export boundary in ' + route + ': ' + before);
  let inCodeBlock = false;
  const markdown = lines.slice(0, end).map((line) => {
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      return line;
    }
    if (inCodeBlock) return line;
    return line.replace(/^(#{1,5}) /, '#$1 ').replace(/\]\(((?:\.\.?\/|#)[^)\s]*)\)/g, (_, target) => {
      const destination = new URL(target, page);
      const pathname = destination.pathname.slice(site.pathname.length);
      if (pathname.startsWith('static/')) {
        destination.pathname = site.pathname + pathname.slice('static/'.length);
      } else if (pathname.startsWith('docs/') && pathname.endsWith('.mdx')) {
        destination.pathname = destination.pathname.slice(0, -'.mdx'.length);
      } else if (!target.startsWith('#')) {
        throw new Error('Unsupported relative link in ' + route + ': ' + target);
      }
      return '](' + destination.href + ')';
    });
  }).join('\n');

  return '## ' + title + '\n\n[Canonical page](' + page.href + ')\n\n' + markdown.trimEnd();
}

const output = [
  '# Syscoin developer and agent reference',
  '> Public RPC endpoints, UTXO transaction tools, and release status for Syscoin Core, NEVM and zkSYS Genesis.',
  ...pages.map(renderPage),
].join('\n\n') + '\n';
writeFileSync(path.join(root, 'static/llms.txt'), output);
