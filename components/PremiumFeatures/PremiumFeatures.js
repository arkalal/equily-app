"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./PremiumFeatures.module.scss";

const features = [
  {
    icon: "🎯",
    title: "Access Premium Opportunities",
    description: "Stand out from the crowd and get noticed by top recruiters.",
    cta: "Unlock Top-Tier Jobs",
  },
  {
    icon: "💰",
    title: "Get Paid to Create Content",
    description: "Create content that enhances your profile and gets you paid!",
    cta: "Start Creating",
  },
  {
    icon: "🌟",
    title: "Create Your Own Brand",
    description: "Let your personal brand speak for you in interviews.",
    cta: "Build Your Brand",
  },
  {
    icon: "🌍",
    title: "Access Global Opportunities",
    description:
      "Work from anywhere with U.S. salaries and European work-life balance.",
    cta: "Go Global",
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
      <motion.button
        className={styles.ctaButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {feature.cta}
      </motion.button>
    </motion.div>
  );
};

const PremiumFeatures = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className={styles.premiumFeatures} ref={ref}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Unlock Premium Opportunities with{" "}
          <span className={styles.highlight}>eqly.in</span>
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

export default PremiumFeatures;
