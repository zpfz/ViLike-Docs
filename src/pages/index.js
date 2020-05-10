import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>更轻量</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        简单功能简单实现，封装十几行代码实现超轻量的JS插件。
      </>
    ),
  },
  {
    title: <>更安全</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        无需在个人服务器上搭建后端系统，数据访问更加安全。
      </>
    ),
  },
  {
    title: <>更方便</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        借助Bmob创建后端平台，创建、管理更加方便快捷。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} - 一款基于Bmob后端云轻量级的访问量&点赞插件`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="hero__logo">
            <img src="/img/logo.png"/>
          </div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--lg btn-1',
                styles.getStarted,
              )}
              href='https://codesandbox.io/s/vilikejs-demo-95l96' target='_blank'
            >
              在线演示
            </Link>
            <Link
              className={classnames(
                'button button--outline button--lg btn-2',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/introduction')}
              style={{ marginLeft: 15 }}
              >
              快速上手
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
