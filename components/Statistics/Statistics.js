"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Statistics.module.scss";

const stats = [
  {
    number: 1000,
    suffix: "+",
    label: "Active Users",
    description: "Growing community of professionals",
  },
  {
    number: 68.33,
    suffix: "%",
    label: "Quick Adoption",
    description: "Users joined within first week",
  },
  {
    number: 1000,
    suffix: "+",
    label: "Indian Users",
    description: "Strong presence in India",
  },
  {
    number: 2,
    suffix: "nd",
    label: "Largest User Base",
    description: "In the United States",
  },
];

const Counter = ({ value, suffix, duration }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={styles.number}>
      {Math.floor(count)}
      {suffix}
    </span>
  );
};

const StatCard = ({ stat, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
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
      className={styles.statCard}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Counter value={stat.number} suffix={stat.suffix} duration={2000} />
      <h3>{stat.label}</h3>
      <p>{stat.description}</p>
    </motion.div>
  );
};

const Statistics = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className={styles.statistics} ref={ref}>
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
          Our Growth <span className={styles.highlight}>Story</span>
        </motion.h2>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Statistics;
