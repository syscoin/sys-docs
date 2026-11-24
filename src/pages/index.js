import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {PageMetadata} from '@docusaurus/theme-common';
import styles from './index.module.css';

const guides = [
  {
    title: 'Run a node',
    description: 'Find Core releases, network settings, and the NEVM client setup.',
    href: '/docs/guides/overview',
  },
  {
    title: 'Build on NEVM',
    description: 'Connect a wallet, call JSON-RPC, or deploy a Solidity contract.',
    href: '/docs/reference/nevm',
  },
  {
    title: 'Build with Core',
    description: 'Read UTXOs, build transactions with SyscoinJS, and publish data.',
    href: '/docs/reference/overview',
  },
  {
    title: 'Try zkSYS Genesis',
    description: 'Get test gas and follow a transaction from Genesis through Gateway to NEVM.',
    href: '/docs/reference/zksys#start-on-zksys-genesis',
  },
];

export default function Home() {
  return (
    <Layout title="Syscoin documentation" description="Architecture, node operation, and application development for Syscoin Core, NEVM, and zkSYS.">
      <PageMetadata image="/img/social/syscoin-foundations.jpg" />
      <main className={styles.home}>
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Syscoin documentation</h1>
            <p>Syscoin Core is a Bitcoin-merge-mined blockchain for SYS, UTXO assets, and data publication. NEVM runs Ethereum-compatible contracts on the same network.</p>
            <div className={styles.actions}>
              <Link className={`${styles.action} ${styles.primary}`} to="/docs/architecture/overview">See the architecture</Link>
              <Link className={styles.action} to="/docs/reference/overview">Developer reference</Link>
            </div>
            <p className={styles.status}>zkSYS Genesis is a public testnet. <Link to="/docs/intro/status">Network and release status</Link></p>
          </div>
          <figure className={styles.map} aria-label="How Bitcoin mining, Syscoin Core, and NEVM relate">
            <div className={styles.mining}>
              <strong>Bitcoin mining pools</strong>
              <span>Participating pools reuse SHA-256 work</span>
            </div>
            <div className={styles.miningLink} aria-hidden="true" />
            <div className={styles.mainnet}>
              <div className={styles.mapTitle}>Syscoin mainnet</div>
              <div className={styles.layers}>
                <div className={styles.layer}>
                  <Link to="/docs/architecture/core">Core</Link>
                  <span>UTXOs, data publication, and ChainLocks</span>
                </div>
                <div className={styles.blockLink}><span>Linked blocks</span></div>
                <div className={styles.layer}>
                  <Link to="/docs/reference/nevm">NEVM</Link>
                  <span>Ethereum-compatible contracts</span>
                </div>
              </div>
            </div>
          </figure>
        </header>
        <section className={styles.reading} aria-labelledby="docs-topics">
          <h2 id="docs-topics">Start here</h2>
          <div className={styles.routes}>
            {guides.map(({title, description, href}) => (
              <Link to={href} className={styles.card} key={href}>
                <h3>{title} <span aria-hidden="true">→</span></h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
