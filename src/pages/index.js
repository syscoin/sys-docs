import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const routes = [
  {title: 'Design tradeoffs and measured results', description: 'See where a 2 MiB blob travels in full, where 32 bytes suffice, and how the choice of hash changes the work inside the prover.', href: '/docs/architecture/design-tradeoffs'},
  {title: 'Who pays for the network?', description: 'Trace SYS rewards to miners and Sentries, public funding to approved proposals, and zkSYS issuance to eligible accounts.', href: '/docs/architecture/modular-alignment#who-pays-for-the-shared-infrastructure'},
  {title: 'Post-quantum finality', description: 'See how a full node checks the signatures that lock a Core block and why that takes bandwidth.', href: '/docs/architecture/post-quantum'},
  {title: 'Command reference', description: 'Start with a public RPC call, build a UTXO transaction with SyscoinJS, or connect a wallet to NEVM or zkSYS.', href: '/docs/reference/overview'},
];

export default function Home() {
  const art = useBaseUrl('/img/compute-cooperative.webp');
  return (
    <Layout title="Syscoin engineering documentation" description="Understand Syscoin Core, NEVM settlement, hash-based data availability, and zkSYS.">
      <main className={styles.home}>
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <h1>What is Syscoin?</h1>
            <p>Syscoin is a blockchain that Bitcoin miners can mine with the same proof of work. It gives people and autonomous agents a common record for checking who authorized a transaction, what data was published, and which outcome settled.</p>
            <p>In the zkSYS design, an application can answer its users locally. It publishes the batch data on Syscoin and sends a compact proof for settlement. Other communities can check the result without running that application on every Core node.</p>
            <p className={styles.status}><Link to="/docs/intro/status">Network status</Link> · Core and NEVM run on mainnet. Post-quantum ChainLocks are a release candidate. zkSYS Genesis is a public testnet.</p>
            <div className={styles.actions}>
              <Link className={`${styles.action} ${styles.primary}`} to="/docs/intro/nutshell">Follow a transaction <span aria-hidden="true">→</span></Link>
              <Link className={styles.action} to="/docs/intro/human-and-ai">Follow the disputed reservation</Link>
            </div>
          </div>
          <figure className={styles.art}>
            <img src={art} alt="Two cooperative members check a reservation ledger and a power meter beside their shared GPU rack." width="1344" height="756" fetchPriority="high" />
            <figcaption><strong>Who gets the last GPU hour?</strong> Two agents can request it. The members need to check who had permission, which request won, and who can hear an appeal.</figcaption>
          </figure>
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
            <h2>Start on zkSYS Genesis</h2>
            <p>Connect a wallet in the portal, get test gas and follow a payment in the explorer. The worked example follows Genesis block 10,968 through Gateway to the mock proof accepted on Tanenbaum NEVM.</p>
            <div className={styles.actions}>
              <Link to="/docs/reference/zksys#start-on-zksys-genesis">Open the Genesis quickstart <span aria-hidden="true">→</span></Link>
              <Link to="/docs/reference/zksys#trace-a-public-testnet-transaction">Trace the testnet transaction <span aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </section>
      </main>
    </Layout>
  );
}
