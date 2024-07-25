import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import Translate, { translate } from '@docusaurus/Translate';

import Text from './_index.md';
import TextEn from '@site/i18n/en/docusaurus-plugin-content-pages/_index.md';
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link className="button button--secondary button--lg" href="/docs">
          <Translate id="index.docsLinkLabel">Дізнатися більше</Translate>
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig, i18n } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--6 col--offset-3 padding-top--lg')}>
                {(() => {
                  switch (i18n.currentLocale) {
                    case 'en':
                      return <TextEn />
                    case 'uk':
                    default:
                      return <Text />
                  }
                })()}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
