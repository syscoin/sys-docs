/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path');

module.exports = {
  title: 'Syscoin Docs',
  tagline: 'Documentation for builders',
  url: 'https://Syscoin.github.io/sys-docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sys-logo.svg',
  organizationName: 'Syscoin', // Usually your GitHub org/user name.
  projectName: 'sys-docs', // Usually your repo name.
  scripts: [
    {
    src: "https://dashboard.letmeexplain.ai/embed/lme_chatbot_widget.js", // LetMeExplain embed script
    async: false,
    },
    {
      src: "/js/enable_lme_chatbot.js", // Custom initialization script
      defer: true,
    },
  ],
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Syscoin Docs',
      logo: {
        alt: 'Syscoin Logo',
        src: 'img/sys-logo.svg',
        href: 'https://docs.syscoin.org/docs/intro/nutshell/'
      },
      items: [
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
              to: 'docs/dev-resources/documentation/javascript-sdk-ref/syscoinjs',
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
              href: 'https://github.com/syscoin/syscoin',
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
