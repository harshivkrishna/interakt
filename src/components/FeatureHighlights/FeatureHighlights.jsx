import React from "react";
import { motion } from "framer-motion";
import "./FeatureHighlights.css";
import {
  Database,
  ArrowUpRight,
  Link2,
  Rocket,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";

function FeatureHighlights() {
  const features = [
    {
      icon: <Database size={32} color="#c58c00" />,
      title: "Access to Meta's APIs",
      description:
        "Leverage direct Meta APIs and get access to the latest WhatsApp Business API features",
    },
    {
      icon: <ArrowUpRight size={32} color="#c58c00" />,
      title: "Scalable Infrastructure",
      description:
        "1000s of brands have partnered with us to scale up their customer support & engagement!",
    },
    {
      icon: <Link2 size={32} color="#c58c00" />,
      title: "Seamless Integrations",
      description:
        "OOTB integrations with your favorite CRMs, payment gateways, e-stores & marketing automation platforms",
    },
    {
      icon: <Rocket size={32} color="#c58c00" />,
      title: "Smooth onboarding & easy setup",
      description:
        "Minimize operational disruption, and deploy a powerful WhatsApp solution for your business in a few simple steps!",
    },
    {
      icon: <BadgeDollarSign size={32} color="#c58c00" />,
      title: "Highly competitive pricing",
      description:
        "No hidden costs — transparent pricing structure with no lock-ins. We show you campaign costs upfront so that there are no surprises later.",
    },
    {
      icon: <Headphones size={32} color="#c58c00" />,
      title: "Industry Leading Support",
      description:
        "Access our premium customer support and get a resolution within minutes!",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // time between each card animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="feature-highlights-section">
      <h2>More reasons to choose Interakt</h2>
      <h4>Get a Green Tick verified WhatsApp Business API account along with:</h4>

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
        transition={{ duration: 0.8, delay: features.length * 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Start Free Trial
      </motion.a>
    </section>
  );
}

export default FeatureHighlights;
