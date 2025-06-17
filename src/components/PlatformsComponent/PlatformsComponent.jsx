import React from "react";
import "./PlatformsComponent.css";

function PlatformsComponent() {
  return (
    <section className="platforms-container">
      <h2 className="platforms-heading">
        Integrates easily with <span className="highlight">60+</span> platforms
      </h2>

      <div className="platforms-logos">
        <img src="/assets/platform/slide1.jpeg" alt="Facebook Ads" />
        <img src="/assets/platform/slide2.jpeg" alt="Google Sheets" />
        <img src="/assets/platform/slide3.jpeg" alt="WooCommerce" />
        <img src="/assets/platform/slide4.jpeg" alt="Shopify" />
        <img src="/assets/platform/slide5.png" alt="Zoho CRM" />
        <img src="/assets/platform/slide6.jpeg" alt="Pabbly" />
      </div>

      <a className="trial-button" href="#form" >Get Started With Free Trial</a>
    </section>
  );
}

export default PlatformsComponent;
