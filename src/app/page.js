"use client";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Statistics from "../../components/Statistics/Statistics";
import Testimonials from "../../components/Testimonials/Testimonials";
import PremiumFeatures from "../../components/PremiumFeatures/PremiumFeatures";
import JoinForm from "../../components/JoinForm/JoinForm";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <PremiumFeatures />
      <JoinForm />
      <Footer />
    </main>
  );
}
