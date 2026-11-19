# Syscoin Docs

The Syscoin engineering documentation is published at [docs.syscoin.org](https://docs.syscoin.org/). This repository contains the Docusaurus site, diagrams, and source text.

## Develop locally

Use Node.js 22 or a newer supported LTS release.

```bash
npm ci
npm start
```

Run `npm run build` to compile MDX, check site links, and generate the static site and search index in `build/`. Use `npm run serve` to preview the built site and try search. CI builds every pull request. The lockfile uses scoped npm overrides for patched build dependencies until Docusaurus and its Webpack dependencies adopt them.

## Update protocol docs

Put architecture under `docs/architecture`, interfaces and source notes under `docs/reference`, and network status under `docs/intro/status.mdx`. Use a pinned source link for implementation details. Mark which network, release, candidate revision, or research result supports each claim. Keep published paths working when replacing old content. Mermaid diagrams live next to the explanation they illustrate.

The [illustration guide](./images/illustrations.md) includes the assets, visual style and scene prompts for the illustrated chapters.

Edit claim IDs, release scopes and verification steps in the [network status register](./docs/intro/status.mdx). Starting or building the site regenerates the [plain-text developer and agent reference](./static/llms.txt) from the [command overview](./docs/reference/overview.mdx), [zkSYS Genesis quickstart](./docs/reference/zksys.mdx#start-on-zksys-genesis), [EVM endpoints](./docs/reference/nevm.mdx), [SyscoinJS examples](./docs/dev-resources/documentation/javascript-sdk-ref/syscoinjs.mdx), [mission and current R&D](./docs/intro/nutshell.mdx#mission), and status register with canonical links. Include the resulting index in the same change.
