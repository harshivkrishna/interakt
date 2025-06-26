import React from "react";
import {
  BadgeCheck,
  Smartphone,
  Users,
  Settings,
  BarChart2,
  ShoppingBag,
} from "lucide-react";
import "./Features.css";

function Features() {
  const features = [
    {
      icon: <BadgeCheck size={28} />,
      title: "Verified Green Tick Verified WhatsApp Business Profile",
    },
    {
      icon: <Smartphone size={28} />,
      title: "Broadcast Campaigns - Personalized & Targeted",
    },
    {
      icon: <Users size={28} />,
      title: "Auto-Replies, Funnels & Chatbots",
    },
    {
      icon: <Settings size={28} />,
      title: "Campaign Analytics & Tracking",
    },
    {
      icon: <BarChart2 size={28} />,
      title: "CRM Integration",
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "Build your own workflows",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <p className="feature-title">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
