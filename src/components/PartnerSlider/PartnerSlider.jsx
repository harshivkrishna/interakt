import React from "react";
import "./PartnerSlider.css";

const logos = [
  "/assets/slider/slide1.png",
  "/assets/slider/slide2.png",
  "/assets/slider/slide3.png",
  "/assets/slider/slide4.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Disney%2B_Hotstar_logo.svg/512px-Disney%2B_Hotstar_logo.svg.png",
  "/assets/slider/slide5.png",
  "/assets/slider/slide6.png",
  "/assets/slider/slide1.png",
  "/assets/slider/slide2.png",
  "/assets/slider/slide3.png",
  "/assets/slider/slide4.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Disney%2B_Hotstar_logo.svg/512px-Disney%2B_Hotstar_logo.svg.png",
  "/assets/slider/slide5.png",
  "/assets/slider/slide6.png",
];

function PartnerSlider() {
  return (
    <section className="partner-section">
      <h2 className="partner-heading">
        <span>25,000+</span> Businesses Across the Globe Trust Interakt
      </h2>
      <div className="slider-container">
      <div className="slider">
        <div className="slide-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt="partner logo" />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default PartnerSlider;
