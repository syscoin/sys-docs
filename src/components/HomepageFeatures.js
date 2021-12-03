import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Developer Documentation',
    Png: '../../static/img/getSys-01.png',
    link: 'docs/dev-resources/nevm/resources',
  },
  {
    title: 'Deploy a NEVM Smart Contract',
    Png: '../../static/img/feature-function-01.png',
    link: 'docs/dev-resources/nevm/guides-and-tuts',
  },
  {
    title: 'What is Syscoin?',
    Png: '../../static/img/feature-security-01.png',
    link: 'docs/intro/syscoin-what',
  },
  {
    title: 'User Guides',
    Png: '../../static/img/connect-01.png',
    link: 'docs/guides/overview',
  },
  {
    title: 'Get SYS',
    Png: '../../static/img/exchanges-01.png',
    link: 'docs/dev-resources/tsys',
  },
];

function Feature({Png, title, description, link}) {
  return (
    <a href={link}>
      <button className={styles.featureButton}>
        <div className={clsx(styles.box)}>
            <div className={clsx('col col--2'), styles.feature}>
              <img className={styles.featurePng} alt={title} src={Png} />
              <h3>{title}</h3>
            </div>
        </div>
      </button>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
