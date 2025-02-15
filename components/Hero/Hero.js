"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

const Hero = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const stars = document.getElementsByClassName(styles.star);
      const x = e.clientX;
      const y = e.clientY;

      for (let star of stars) {
        const speed = star.getAttribute("data-speed");
        const rect = star.getBoundingClientRect();
        const starX = rect.left + rect.width / 2;
        const starY = rect.top + rect.height / 2;

        const distanceX = x - starX;
        const distanceY = y - starY;

        star.style.transform = `translate(${distanceX * speed}px, ${
          distanceY * speed
        }px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.starfield}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.star}
            data-speed={Math.random() * 0.01}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.title}
        >
          Welcome to <span className={styles.highlight}>eqly.in</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.subheading}
        >
          The World&apos;s First Talent-Based Social Media for Job Seekers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.description}
        >
          Get on the Waitlist - Invitations Are Limited
        </motion.p>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className={styles.primaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Waiting List
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
