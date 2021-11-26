/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path');

module.exports = {
  title: 'Syscoin Docs',
  tagline: 'Documentation for the buidlers!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Syscoin', // Usually your GitHub org/user name.
  projectName: 'sys-docs', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Syscoin Docs',
      logo: {
        alt: 'Syscoin Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'docs',
          label: "Docs",
          position: 'left',
        },
        {
          href: 'https://github.com/syscoin',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'JS SDK Reference',
              to: 'docs/documentation/javascript-sdk-ref/syscoinjs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/syscoin',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/syscoin',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/syscoin',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Syscoin. Built with Docusaurus.`,
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🔆",
        "darkIconStyle": {},
        "lightIcon": "🌙",
        "lightIconStyle": {}
      }
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
  ],
};
