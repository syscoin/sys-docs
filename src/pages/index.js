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
    <Layout title="Syscoin engineering documentation" description="See how Syscoin uses Bitcoin mining, hash-based data availability and zkSYS to let independent applications share a verifiable record.">
      <main className={styles.home}>
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <h1>What stays scarce when intelligence gets cheap?</h1>
            <p>AI makes planning cheaper. People still decide who gets the water, power or compute. Syscoin gives them a shared record they can check. Bitcoin miners can reuse their work to mine it. <Link to="/docs/intro/nutshell#mission">Our mission</Link></p>
            <p>In the zkSYS design, communities can act locally on rights they already hold, then publish data and proofs for others to verify.</p>
            <div className={styles.actions}>
              <Link className={`${styles.action} ${styles.primary}`} to="/docs/reference/zksys#trace-a-public-testnet-transaction">Trace a testnet payment <span aria-hidden="true">→</span></Link>
              <Link className={styles.action} to="/docs/intro/nutshell#current-research--development">Current R&amp;D <span aria-hidden="true">→</span></Link>
            </div>
            <p className={styles.status}><Link to="/docs/intro/status">Network status</Link> · Core and NEVM run on mainnet. Post-quantum ChainLocks are a release candidate. zkSYS Genesis is a public testnet.</p>
          </div>
          <figure className={styles.art}>
            <img src={art} alt="Two cooperative members check a reservation ledger and a power meter beside their shared GPU rack." width="1344" height="756" fetchPriority="high" />
            <figcaption><strong>The last GPU hour.</strong> Two agents request it. Members need to check who had permission, which request won, and who can hear an appeal. <Link to="/docs/intro/human-and-ai">Follow the disputed reservation</Link></figcaption>
          </figure>
        </header>
        <nav className={styles.networks} aria-label="Architecture guides">
          <Link to="/docs/architecture/overview"><small>System map</small><b>How the layers fit together</b></Link>
          <Link to="/docs/architecture/comparison"><small>Other chains</small><b>Compare the tradeoffs</b></Link>
          <Link to="/docs/architecture/bitcoin-bridge#inspect-a-tag-in-a-bitcoin-block"><small>Bitcoin bridge research</small><b>Inspect a real mining tag</b></Link>
          <Link to="/docs/intro/nutshell#follow-the-payment"><small>Start here</small><b>See how a payment works</b></Link>
        </nav>
        <section className={styles.relay} aria-labelledby="gateway-relay">
          <h2 id="gateway-relay">Three blobs on Core. Three hashes on Gateway.</h2>
          <dl className={styles.relaySizes}>
            <div>
              <dt>Application data published on Core</dt>
              <dd>5 MiB</dd>
            </div>
            <div>
              <dt>Compact Gateway relay message</dt>
              <dd>288 bytes</dd>
            </div>
          </dl>
          <p>The earlier relay carried the full payload. The compact message carries three 32-byte BLAKE2s digests and the batch context. Core still carries the bytes, so an independent reader can retrieve them and check the digests.</p>
          <Link className={styles.relayLink} to="/docs/architecture/data-availability#how-much-crosses-gateway">See the encoder and byte counts</Link>
        </section>
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
