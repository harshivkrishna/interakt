import React from "react";
import "./PlatformsComponent.css";

function PlatformsComponent() {
  return (
    <section className="platforms-container">
      <h2 className="platforms-heading">Integrate with multiple platforms</h2>

      <div className="platforms-logos">
        <img src="/assets/platform/slide5.png" alt="Zoho CRM" />
        <img src="/assets/platform/slide4.jpeg" alt="Shopify" />
        <img src="/assets/platform/slide2.jpeg" alt="Google Sheets" />
        <img src="/assets/platform/meta.jpeg" alt="Meta Business Suite" />
        <img src="/assets/platform/whatsapp.jpeg" alt="Whatsapp" />
        <img src="/assets/platform/insta.jpeg" alt="Instagram" />
      </div>

      <a className="trial-button" href="#form" >Get Started for Free</a>
    </section>
  );
}

export default PlatformsComponent;
