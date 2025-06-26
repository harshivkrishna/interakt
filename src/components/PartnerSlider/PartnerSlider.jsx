import React, { useMemo } from "react";
import "./PartnerSlider.css";
import { FaWhatsapp, FaMapMarkerAlt, FaHeart, FaLock } from "react-icons/fa";

const logos = [
  "/assets/slider/slide1.png",
  "/assets/slider/slide2.png",
  "/assets/slider/slide3.png",
  "/assets/slider/slide4.png",
  "/assets/slider/slide5.png",
  "/assets/slider/slide6.png",
  "/assets/slider/slide7.png",
  "/assets/slider/slide8.png",
];

const highlights = [
  {
    icon: <FaWhatsapp />,
    text: "No App Needed - All updates directly on WhatsApp",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "Location-Based Offers - Relevant to where you are",
  },
  {
    icon: <FaHeart />,
    text: "Tailored to Your Interests - You pick what you like",
  },
  {
    icon: <FaLock />,
    text: "Exclusive Deals - Not available anywhere else",
  },
];

function PartnerSlider() {
  const duplicatedLogos = useMemo(() => logos.concat(logos), []);

  return (
    <section className="partner-section">
      <h2 className="partner-heading">
        Why <span>10,000+</span> Users Love Chirrp!
      </h2>

      <div className="slider-container">
        <div className="slider">
          <div className="slide-track">
            {duplicatedLogos.map((logo, index) => (
              <div className="slide" key={index}>
                <img src={logo} alt={`partner logo ${index}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="partner-highlights">
        {highlights.map((item, index) => (
          <div className="highlight" key={index}>
            <div className="icon">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(PartnerSlider);
