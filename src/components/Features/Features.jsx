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
      title: "Get Green Tick Verified",
    },
    {
      icon: <Smartphone size={28} />,
      title: "One time & recurring Campaigns on WhatsApp",
    },
    {
      icon: <Users size={28} />,
      title: "Shared Team Inbox with auto chat assignment",
    },
    {
      icon: <Settings size={28} />,
      title: "Build your own Workflows",
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Campaign & Agent Analytics",
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "Simplicity for SMBs with Enterprise grade Scale & Security",
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
