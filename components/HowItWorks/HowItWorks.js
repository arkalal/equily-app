"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./HowItWorks.module.scss";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Showcase your skills, experience, and aspirations in a comprehensive profile.",
    icon: "👤",
  },
  {
    number: "02",
    title: "Discover Opportunities",
    description:
      "Explore personalized job recommendations tailored to your unique skill set.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Connect & Grow",
    description:
      "Network with industry professionals and expand your career horizons.",
    icon: "🤝",
  },
];

const Step = ({ step, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={styles.step}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className={styles.stepContent}>
        <motion.div
          className={styles.iconContainer}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className={styles.icon}>{step.icon}</span>
          <span className={styles.number}>{step.number}</span>
        </motion.div>
        <div className={styles.stepInfo}>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      </div>
      {index < steps.length - 1 && <div className={styles.connector} />}
    </motion.div>
  );
};

const HowItWorks = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="how-it-works" className={styles.howItWorks} ref={ref}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          How <span className={styles.highlight}>eqly.in</span> Works
        </motion.h2>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <Step key={index} step={step} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
