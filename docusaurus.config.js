// @ts-check
const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Syscoin Docs',
  tagline: 'Architecture, operator guides, and developer reference',
  url: 'https://docs.syscoin.org',
  baseUrl: '/',
  favicon: 'img/sys-logo.svg',
  organizationName: 'syscoin',
  projectName: 'sys-docs',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {mermaid: true, hooks: {onBrokenMarkdownLinks: 'throw'}},
  themes: [
    '@docusaurus/theme-mermaid',
    [require.resolve('@easyops-cn/docusaurus-search-local'), {
      hashed: 'filename',
      indexBlog: false,
      docsRouteBasePath: '/docs',
    }],
  ],
  plugins: [['@docusaurus/plugin-client-redirects', {
    redirects: [
      {from: ['/docs/guides/spts/create-issue-tokens', '/docs/guides/spts/use-tokens', '/docs/guides/spts/aux-fees', '/docs/guides/spts/notary-business-rulesets', '/docs/tech/notary'], to: '/docs/tech/tokens'},
      {from: '/docs/dev-resources/sys/asset-index', to: '/docs/dev-resources/sys/exchange-integration'},
      {from: '/docs/dev-resources/nevm/truffle', to: '/docs/dev-resources/nevm/tooling'},
      {from: ['examples', 'hdsigner', 'trezorsigner', 'types', 'utils'].map((name) => `/docs/dev-resources/documentation/javascript-sdk-ref/${name}`), to: '/docs/dev-resources/documentation/javascript-sdk-ref/syscoinjs'},
    ],
  }]],
  presets: [['classic', {
    docs: {
      sidebarPath: require.resolve('./sidebars.js'),
      editUrl: 'https://github.com/syscoin/sys-docs/edit/master/',
    },
    blog: false,
    theme: {customCss: require.resolve('./src/css/custom.css')},
  }]],
  themeConfig: {
    image: 'img/syscoin-foundations.webp',
    docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
    mermaid: {theme: {light: 'neutral', dark: 'dark'}},
    navbar: {
      title: 'Syscoin Docs',
      logo: {alt: 'Syscoin', src: 'img/sys-logo.svg'},
      items: [
        {to: '/docs/intro/nutshell', label: 'Overview', position: 'left'},
        {to: '/docs/architecture/overview', label: 'Architecture', position: 'left'},
        {to: '/docs/governance/overview', label: 'Governance', position: 'left'},
        {to: '/docs/reference/overview', label: 'Reference', position: 'left'},
        {href: 'https://github.com/syscoin/sys-docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Protocol', items: [
          {label: 'Overview', to: '/docs/intro/nutshell'},
          {label: 'Architecture', to: '/docs/architecture/overview'},
          {label: 'Governance', to: '/docs/governance/overview'},
          {label: 'Network status', to: '/docs/intro/status'},
        ]},
        {title: 'Develop', items: [
          {label: 'Command reference', to: '/docs/reference/overview'},
          {label: 'NEVM tooling', to: '/docs/dev-resources/nevm/tooling'},
          {label: 'zkSYS testnet', to: '/docs/reference/zksys'},
        ]},
        {title: 'Project', items: [
          {label: 'Syscoin.org', href: 'https://syscoin.org/'},
          {label: 'Core source', href: 'https://github.com/syscoin/syscoin'},
          {label: 'Support', href: 'https://support.syscoin.org/'},
        ]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Syscoin`,
    },
    prism: {theme: themes.github, darkTheme: themes.nightOwl, additionalLanguages: ['bash', 'json', 'solidity', 'yaml']},
  },
};

module.exports = config;
