import React from "react";
import "./PlatformsComponent.css";

function PlatformsComponent() {
  return (
    <section className="platforms-container">
      <h2 className="platforms-heading">Integrate with multiple platforms</h2>

      <div className="platforms-logos">
        <img src="/assets/platform/zoho_crm.png" alt="Zoho CRM" />
        <img src="/assets/platform/g_ads.png" alt="Google ads" />
        <img src="/assets/platform/g_sheets.png" alt="Google Sheets" />
        <img src="/assets/platform/meta.png" alt="Meta Business Suite" />
        <img src="/assets/platform/whatsapp.jpeg" alt="Whatsapp" />
        <img src="/assets/platform/insta.png" alt="Instagram" />
      </div>

      <a className="trial-button" href="#form" >Get Started for Free</a>
    </section>
  );
}

export default PlatformsComponent;
