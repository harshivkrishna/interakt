import React, { useEffect, useState } from "react";
import "./Hero.css";

const words = [
  { text: "CRM", color: "#0ab095" },
  { text: "Marketing", color: "#f97316" },
  { text: "Commerce", color: "#6366f1" },
];

function CustomTypewriter({ words, typeSpeed = 150, delay = 2000 }) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index].text;

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setIndex((prev) => (prev + 1) % words.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, words, typeSpeed, delay]);

  return (
    <span style={{ color: words[index].color, fontWeight: "bold" }}>
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  );
}

function Hero() {
  return (
    <main className="hero-section">
      <div className="left-container">
        <img src="/assets/logo.png" className="logoImg" alt="logo" />
        <h1>
          Transform Conversations into Conversions with WhatsApp{" "}
          <CustomTypewriter words={words} />
        </h1>
        <img src="/assets/meta.webp" className="metaImg" alt="meta" />
        <p>
          Integrate effortlessly with the WhatsApp Business API. The only
          full-stack platform to offer a seamless customer experience & grow
          your business on WhatsApp.
        </p>
        <a href="#form">Start Free Trial</a>
      </div>
      <div className="right-container">
        <img src="/assets/headerImg.png" alt="header" />
      </div>
    </main>
  );
}

export default Hero;
