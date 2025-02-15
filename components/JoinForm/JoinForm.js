"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./JoinForm.module.scss";

const statusOptions = [
  { value: "jobSeeker", label: "Job Seeker" },
  { value: "working", label: "Currently Working" },
  { value: "company", label: "Company Interest" },
];

const challengeOptions = {
  jobSeeker: [
    { value: "opportunities", label: "Lack of relevant job opportunities" },
    { value: "interviews", label: "Difficulty with interviews" },
    { value: "network", label: "Limited professional network" },
  ],
  working: [
    { value: "growth", label: "Lack of career growth opportunities" },
    { value: "worklife", label: "Unhappy with work-life balance" },
    { value: "challenges", label: "Seeking new challenges" },
  ],
  company: [
    { value: "candidates", label: "Lack of qualified candidates" },
    { value: "engagement", label: "Poor engagement from potential applicants" },
    { value: "process", label: "Hiring process inefficiencies" },
  ],
};

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "",
    company: "",
    challenge: "",
  });

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "status" && { challenge: "" }), // Reset challenge when status changes
    }));
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={styles.joinForm} ref={ref}>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={formVariants}
      >
        <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
          Join <span className={styles.highlight}>eqly.in</span> Today
        </motion.h2>

        <motion.p className={styles.subtitle} variants={itemVariants}>
          Last chance to be first! Exclusive spots left for creator-first
          talents.
        </motion.p>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          variants={formVariants}
        >
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className={styles.formGroup} variants={itemVariants}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className={styles.formGroup} variants={itemVariants}>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Your Status</option>
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </motion.div>

          {formData.status === "company" && (
            <motion.div
              className={styles.formGroup}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </motion.div>
          )}

          {formData.status && (
            <motion.div
              className={styles.formGroup}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <select
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                required
              >
                <option value="">Select Your Challenge</option>
                {challengeOptions[formData.status].map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </motion.div>
          )}

          <motion.button
            type="submit"
            className={styles.submitButton}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Exclusive Access
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default JoinForm;
