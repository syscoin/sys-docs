import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const routes = [
  {title: 'Design tradeoffs and measured results', description: 'Compare DA proving cycles, relay bytes, and GPU capacity. See which costs each result measures.', href: '/docs/architecture/design-tradeoffs'},
  {title: 'How zkSYS uses SYS', description: 'Follow an application transaction, a stake-weighted reward, and a fee paid through the Gas Tank.', href: '/docs/architecture/zksys'},
  {title: 'Post-quantum finality', description: 'See how a full node checks the signatures that lock a Core block and why that takes bandwidth.', href: '/docs/architecture/post-quantum'},
  {title: 'Command reference', description: 'Inspect a Core block, query NEVM, retrieve batch data, or connect to the public zkSYS testnet.', href: '/docs/reference/overview'},
];

export default function Home() {
  const art = useBaseUrl('/img/compute-cooperative.webp');
  return (
    <Layout title="Syscoin engineering documentation" description="Understand Syscoin Core, NEVM settlement, hash-based data availability, and zkSYS.">
      <main className={styles.home}>
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Who gets the last GPU hour?</h1>
            <p>Imagine two AI agents booking one machine. The community that owns it needs to see who had permission, which request won, and how to appeal. Syscoin’s design gives independent operators a shared history on which to check the decision.</p>
            <div className={styles.actions}>
              <Link className={`${styles.action} ${styles.primary}`} to="/docs/intro/nutshell">Follow a transaction <span aria-hidden="true">→</span></Link>
              <Link className={styles.action} to="/docs/intro/human-and-ai">Follow the disputed reservation</Link>
            </div>
          </div>
          <div className={styles.art}>
            <img src={art} alt="Two cooperative members check a reservation ledger and a power meter beside their shared GPU rack." width="1344" height="756" fetchPriority="high" />
          </div>
        </header>
        <nav className={styles.networks} aria-label="Architecture guides">
          <Link to="/docs/architecture/overview"><small>System map</small><b>How the layers fit together</b></Link>
          <Link to="/docs/architecture/comparison"><small>Other chains</small><b>Compare the tradeoffs</b></Link>
          <Link to="/docs/architecture/bitcoin-bridge#inspect-a-tag-in-a-bitcoin-block"><small>Bitcoin bridge research</small><b>Inspect a real mining tag</b></Link>
          <Link to="/docs/intro/status"><small>Network status</small><b>Check deployments and releases</b></Link>
        </nav>
        <section className={styles.reading} aria-labelledby="docs-topics">
          <h2 id="docs-topics">Explore the stack</h2>
          <div className={styles.routes}>
            {routes.map(({title, description, href}) => (
              <Link to={href} className={styles.card} key={href}>
                <h3>{title} <span aria-hidden="true">→</span></h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
          <aside className={styles.thesis}>
            <h2>Start with a receipt you can check.</h2>
            <p>A transaction in Genesis block 10,968 reached Gateway and then Tanenbaum NEVM. Match its batch number to the events on each chain and inspect what the settlement contract accepted.</p>
            <Link to="/docs/reference/zksys#trace-a-public-testnet-transaction">Trace the testnet transaction <span aria-hidden="true">→</span></Link>
          </aside>
        </section>
      </main>
    </Layout>
  );
}
