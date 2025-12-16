import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ROS 2 Fundamentals',
    description: (
      <>
        Learn the core concepts of ROS 2: nodes, topics, and services that connect
        AI software to physical robots.
      </>
    ),
  },
  {
    title: 'Python Robotics',
    description: (
      <>
        Master how to use Python with ROS 2 to send and receive robot data using
        the rclpy library for AI-to-robot communication.
      </>
    ),
  },
  {
    title: 'Robot Description',
    description: (
      <>
        Understand URDF (Unified Robot Description Format) and how robots are
        described in software for simulation and control.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
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