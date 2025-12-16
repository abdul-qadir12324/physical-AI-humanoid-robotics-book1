import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/module-1">
            Start Learning ROS 2 - 5 min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Connecting AI to Physical Systems through ROS 2">
      <HomepageHeader />
      <main>
        <section className={styles.aboutSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6 col--offset-3">
                <h2>About This Textbook</h2>
                <p>
                  This textbook provides a comprehensive introduction to Physical AI & Humanoid Robotics,
                  focusing on how AI software connects to physical robots through ROS 2 (Robot Operating System 2).
                </p>
                <p>
                  Learn fundamental concepts of robot architecture, programming with Python,
                  and how to describe robot bodies using URDF (Unified Robot Description Format).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}