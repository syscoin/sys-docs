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
  const art = useBaseUrl('/img/syscoin-foundations.webp');
  return (
    <Layout title="Syscoin engineering documentation" description="Understand Syscoin Core, NEVM settlement, hash-based data availability, and zkSYS.">
      <main className={styles.home}>
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <h1>How Syscoin scales execution.</h1>
            <p>An application can answer quickly. Someone who never ran its server should still be able to check the result. Follow a zkSYS transaction to see how Bitcoin mining work, published data, and proofs make that possible.</p>
            <div className={styles.actions}>
              <Link className={`${styles.action} ${styles.primary}`} to="/docs/intro/nutshell">Follow a transaction <span aria-hidden="true">→</span></Link>
              <Link className={styles.action} to="/docs/intro/status">Check network and release status</Link>
            </div>
          </div>
          <div className={styles.art}>
            <img src={art} alt="" width="1200" height="800" fetchPriority="high" />
          </div>
        </header>
        <nav className={styles.networks} aria-label="Architecture guides">
          <Link to="/docs/architecture/overview"><small>System map</small><b>How the layers fit together</b></Link>
          <Link to="/docs/architecture/comparison"><small>Other chains</small><b>Compare the tradeoffs</b></Link>
          <Link to="/docs/architecture/bitcoin-bridge#inspect-a-tag-in-a-bitcoin-block"><small>Bitcoin bridge research</small><b>Inspect a real mining tag</b></Link>
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
            <h2>Who sets the rules when intelligence gets cheap?</h2>
            <p>If an AI agent reserves a community’s last hour of compute, how can another member check that it had permission? Follow a reservation from a local rule to a record another cooperative can verify.</p>
            <Link to="/docs/intro/human-and-ai">Humans, AI, and shared resources <span aria-hidden="true">→</span></Link>
          </aside>
        </section>
      </main>
    </Layout>
  );
}
