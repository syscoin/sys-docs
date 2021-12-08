import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Developer Documentation',
    png: 'img/getSys-01.png',
    pngSmall: 'img/getSys-01-sm.png',
    link: 'docs/dev-resources/nevm/resources',
    color: '#DCEAFF',
  },
  {
    title: 'Deploy a NEVM Smart Contract',
    png: 'img/feature-function-02.png',
    pngSmall: 'img/feature-function-02-sm.png',
    link: 'docs/dev-resources/nevm/guides-and-tuts',
    color: '#DDEBF6',
  },
  {
    title: 'What is Syscoin?',
    png: 'img/feature-security-02.png',
    pngSmall: 'img/feature-security-02-sm.png',
    link: 'docs/intro/syscoin-what',
    color: '#CFE8EB',
  },
  {
    title: 'User Guides',
    png: 'img/connect-01.png',
    pngSmall: 'img/connect-01-sm.png',
    link: 'docs/guides/overview',
    color: '#EBE8CF',
  },
  {
    title: 'Get SYS',
    png: 'img/exchanges-01.png',
    pngSmall: 'img/exchanges-01-sm.png',
    link: 'docs/dev-resources/tsys',
    color: '#EBD2CF',
  },
];

function Feature({png, pngSmall, title, description, link, color}) {

  return (
    <div className={clsx(styles.box)}>
      <a href={link} className={styles.featureButton}>
        <div className={clsx('col col--2'), styles.feature} style={{background: color}}>
        <picture>
           <source
              media="(min-width: 650px)"
              srcSet={png} />
           <source
              media="(min-width: 200px)"
              srcSet={pngSmall} />
            <img className={styles.featurePng} alt={title} src={png} />
        </picture>

          <h3>{title}</h3>
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
