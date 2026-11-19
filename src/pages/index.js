import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const routes = [
  {title: 'System architecture', description: 'Follow merged mining, ChainLocks, NEVM settlement, and the data path into zkSYS.', href: '/docs/architecture/overview'},
  {title: 'zkSYS and modular alignment', description: 'See how faster execution uses Syscoin DA, settlement, and SYS-linked issuance.', href: '/docs/architecture/zksys'},
  {title: 'Post-quantum design', description: 'Trace hash-based signatures from operator identity to directly verified quorum certificates.', href: '/docs/architecture/post-quantum'},
  {title: 'Command reference', description: 'Inspect Core and NEVM, connect to zkSYS testnet, and locate the primary sources.', href: '/docs/reference/overview'},
];

export default function Home() {
  const art = useBaseUrl('/img/syscoin-foundations.webp');
  return (
    <Layout title="Syscoin engineering documentation" description="Understand Syscoin Core, NEVM settlement, hash-based data availability, and zkSYS.">
      <main className={styles.home}>
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <h1>From Bitcoin work to verifiable execution.</h1>
            <p>Explore how Syscoin combines Bitcoin merge mining, post-quantum finality, and hash-based data availability. Follow zkSYS from execution through proof-based settlement.</p>
            <div className={styles.actions}>
              <Link className={`${styles.action} ${styles.primary}`} to="/docs/architecture/overview">Explore the architecture <span aria-hidden="true">↗</span></Link>
              <Link className={styles.action} to="/docs/intro/status">Check network status</Link>
            </div>
          </div>
          <div className={styles.art}>
            <img src={art} alt="" width="1200" height="800" fetchPriority="high" />
          </div>
        </header>
        <section className={styles.networks} aria-label="Implementation status">
          <Link to="/docs/intro/status"><small>Network status</small><b>Mainnet and testnets</b></Link>
          <Link to="/docs/architecture/zksys"><small>Scaling</small><b>zkSYS and Edgechains</b></Link>
          <Link to="/docs/architecture/post-quantum"><small>Finality</small><b>PQ ChainLocks</b></Link>
        </section>
        <section className={styles.reading} aria-labelledby="docs-topics">
          <h2 id="docs-topics">Explore the stack</h2>
          <div className={styles.routes}>
            {routes.map(({title, description, href}) => (
              <Link to={href} className={styles.card} key={href}>
                <h3>{title} <span aria-hidden="true">↗</span></h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
          <aside className={styles.thesis}>
            <h2>Who sets the rules when intelligence gets cheap?</h2>
            <p>Read the design thesis for community-run resources, independently verifiable decisions, and coordination across distance.</p>
            <Link to="/docs/intro/human-and-ai">Humans, AI, and shared resources <span aria-hidden="true">↗</span></Link>
          </aside>
        </section>
      </main>
    </Layout>
  );
}
