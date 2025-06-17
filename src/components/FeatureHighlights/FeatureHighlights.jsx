import React from "react";
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

  return (
    <section className="feature-highlights-section">
        <h2>More reasons to choose Interakt</h2>
        <h4>Get a Green Tick verified WhatsApp Business API account along with:</h4>
      <div className="feature-highlights-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-highlights-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <a className="trial-button" href="#form">Start Free Trial</a>
    </section>
  );
}

export default FeatureHighlights;
