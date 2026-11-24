import React from 'react';
import styles from './styles.module.css';

export function CoreExecutionFigure() {
  return (
    <figure className={styles.figure}>
      <div className={styles.inputs}>
        <div className={styles.card}>
          <strong>Mining pools</strong>
          <span>Submit blocks with AuxPoW</span>
        </div>
        <div className={styles.card}>
          <strong>Sentry Nodes</strong>
          <span>Sign ChainLocks</span>
        </div>
      </div>
      <div className={styles.inputArrows} aria-hidden="true">
        <span className={styles.arrow} />
        <span className={styles.arrow} />
      </div>
      <div className={styles.coreCard}>
        <strong>Syscoin Core</strong>
        <span>Checks blocks and ChainLocks</span>
      </div>
      <div className={styles.connection} aria-hidden="true">
        <span className={styles.arrow} />
        <span>Block order</span>
      </div>
      <div className={styles.nevmCard}>
        <strong>NEVM</strong>
        <span>Executes smart contracts in Core block order</span>
      </div>
      <figcaption>Mining supplies candidate blocks. Sentries certify a block and its history. Core validates both and coordinates NEVM block execution.</figcaption>
    </figure>
  );
}

export function BlobRetentionFigure() {
  return (
    <figure className={styles.figure}>
      <div className={styles.retentionGrid}>
        <strong className={styles.threshold}>6 hours</strong>
        <dl className={styles.clocks}>
          <div>
            <dt>Active tip</dt>
            <dd>The blob lookup expires when the tip crosses the retention threshold.</dd>
          </div>
          <div>
            <dt>Accepted ChainLock</dt>
            <dd>Mainnet can delete the stored copy when the locked block crosses that threshold.</dd>
          </div>
        </dl>
      </div>
      <figcaption>Both clocks use median time past. With tip-based expiry, a stalled ChainLock can keep bytes on disk after lookup expires.</figcaption>
    </figure>
  );
}

export function ChainLockVerificationFigure() {
  return (
    <figure className={styles.figure} aria-label="Post-quantum ChainLock verification">
      <div className={styles.card}>
        <strong>Find the eligible roster slots</strong>
        <span>Use the Sentry registry snapshot for the target block.</span>
      </div>
      <div className={styles.flowArrow} aria-hidden="true"><span className={styles.arrow} /></div>
      <div className={styles.card}>
        <strong>Check each WOTS+ vote</strong>
        <span>Authenticate the scheduled key, then verify its signature.</span>
      </div>
      <div className={styles.flowArrow} aria-hidden="true"><span className={styles.arrow} /></div>
      <div className={styles.coreCard}>
        <strong>Verify the certificate threshold</strong>
        <span>267 valid votes in each of three selected rosters.</span>
      </div>
    </figure>
  );
}
