"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Features.module.scss";

const features = [
  {
    icon: "📊",
    title: "Data-Driven Insights",
    description: "Gain a competitive edge with personalized analytics.",
  },
  {
    icon: "🎯",
    title: "Exclusive Opportunities",
    description: "Access a curated network of top-tier companies.",
  },
  {
    icon: "🚀",
    title: "Accelerated Growth",
    description: "Propel your career forward with personalized resources.",
  },
];

const FeatureCard = ({ feature, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={styles.featureCard}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{feature.icon}</span>
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="features" className={styles.features} ref={ref}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className={styles.sectionTitle}
        >
          Why Choose <span className={styles.highlight}>eqly.in</span>?
        </motion.h2>

        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
