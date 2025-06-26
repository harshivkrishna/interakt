import React from "react";
import { motion } from "framer-motion";
import "./FeatureHighlights.css";
import {
  Wand2,
  Briefcase,
  Smartphone,
  TrendingUp,
  PlugZap,
  BarChart3,
} from "lucide-react";

function FeatureHighlights() {
  const features = [
    {
      icon: <Wand2 size={32} color="#c58c00" />,
      title: "Done-for-You Campaigns",
      description: "We build it. You just watch the leads roll in.",
    },
    {
      icon: <Briefcase size={32} color="#c58c00" />,
      title: "Industry Experts Across Verticals",
      description: "From fashion to F&B – we speak your brand's language.",
    },
    {
      icon: <Smartphone size={32} color="#c58c00" />,
      title: "No App, No Clutter – Just Pure Conversions",
      description: "Streamlined, smart, and straight to results.",
    },
    {
      icon: <TrendingUp size={32} color="#c58c00" />,
      title: "Scalable & Affordable for All Brand Sizes",
      description: "Whether you're boutique or booming – we grow with you.",
    },
    {
      icon: <PlugZap size={32} color="#c58c00" />,
      title: "Plug & Play Onboarding",
      description: "Get started in minutes — no tech headaches, no waiting.",
    },
    {
      icon: <BarChart3 size={32} color="#c58c00" />,
      title: "Real-Time Insights & Reporting",
      description: "Know what’s working, when — and double down with data.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="feature-highlights-section">
      <h2>WHY CHOOSE CHIRRP!</h2>
      <h4>We make customer engagement effortless, impactful, and scalable</h4>

      <motion.div
        className="feature-highlights-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-highlights-card"
            variants={cardVariants}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        className="trial-button"
        href="#form"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: features.length * 0.2,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Start Free Trial
      </motion.a>
    </section>
  );
}

export default FeatureHighlights;
