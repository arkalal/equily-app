"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    id: 1,
    name: "Emily Lee",
    role: "UX/UI Designer",
    company: "Ex-Google",
    quote:
      "I love how eqly.in focuses on talent. It's refreshing to be seen for what I can do, not just my resume.",
    image: "/testimonials/emily.jpg",
  },
  {
    id: 2,
    name: "Alex Chen",
    role: "Software Engineer",
    company: "Tech Startup Founder",
    quote:
      "The platform's approach to matching talent with opportunities is revolutionary. It's exactly what the industry needed.",
    image: "/testimonials/alex.jpg",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Product Manager",
    company: "Fortune 500",
    quote:
      "eqly.in has transformed how I approach job searching. The focus on skills and potential is game-changing.",
    image: "/testimonials/sarah.jpg",
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={`${styles.testimonialCard} ${isActive ? styles.active : ""}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.testimonialContent}>
        <div className={styles.quote}>{testimonial.quote}</div>
        <div className={styles.author}>
          <div className={styles.authorInfo}>
            <h4>{testimonial.name}</h4>
            <p>{testimonial.role}</p>
            <span>{testimonial.company}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className={styles.testimonials} ref={ref}>
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
          What Early Access Users <span className={styles.highlight}>Say</span>
        </motion.h2>

        <div className={styles.testimonialSlider}>
          <div className={styles.testimonialTrack}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          <div className={styles.indicators}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentIndex ? styles.active : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
