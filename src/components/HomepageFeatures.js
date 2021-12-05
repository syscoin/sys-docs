import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Developer Documentation',
    png: 'img/getSys-01.png',
    link: 'docs/dev-resources/nevm/resources',
    color: '#DCEAFF',
  },
  {
    title: 'Deploy a NEVM Smart Contract',
    png: 'img/feature-function-01.png',
    link: 'docs/dev-resources/nevm/guides-and-tuts',
    color: '#DDEBF6',
  },
  {
    title: 'What is Syscoin?',
    png: 'img/feature-security-01.png',
    link: 'docs/intro/syscoin-what',
    color: '#CFE8EB',
  },
  {
    title: 'User Guides',
    png: 'img/connect-01.png',
    link: 'docs/guides/overview',
    color: '#EBE8CF',
  },
  {
    title: 'Get SYS',
    png: 'img/exchanges-01.png',
    link: 'docs/dev-resources/tsys',
    color: '#EBD2CF',
  },
];

function Feature({png, title, description, link, color}) {

  return (
    <div className={clsx(styles.box)}>
      <a href={link} class="button" className={styles.featureButton}>
        <div className={clsx('col col--2'), styles.feature} style={{background: color}}>
          <img className={styles.featurePng} alt={title} src={png} />
          <h3 className={styles.featureButton}>{title}</h3>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
