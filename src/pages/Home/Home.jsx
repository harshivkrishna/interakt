import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import PartnerSlider from "../../components/PartnerSlider/PartnerSlider";
import './Home.css'
import Form from "../../components/Form/Form";
import IndustrySlider from "../../components/IndustrySlider/IndustrySlider";
import PlatformsComponent from "../../components/PlatformsComponent/PlatformsComponent";
import Testimonial from "../../components/Testimonial/Testimonial";
import FeatureHighlights from "../../components/FeatureHighlights/FeatureHighlights";

function Home() {
  const [showTopBar, setShowTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2 ) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`top-bar ${showTopBar ? "visible" : ""}`}>
        <p>Get Started for Free! </p>
      </div>
      <Hero />
      <Features />
      <PartnerSlider />
      <Form/>
      <IndustrySlider/>
      <PlatformsComponent/>
      <Testimonial/>
      <FeatureHighlights/>
    </>
  );
}

export default Home;
