import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const words = [
  { text: "Offers", color: "#0ab095" },
  { text: "Discounts", color: "#f97316" },
  { text: "& More", color: "#6366f1" },
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
      <motion.div
        className="left-container"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src="/assets/logo.png" className="logoImg" alt="logo" />
        <h1>
          Conversations that convert {" "}
          <CustomTypewriter words={words} />
        </h1>
        <p>
        <b>Get Handpicked Discounts on WhatsApp - Instantly!</b> From food and fashion to real estate and entertainment - we send you <b>curated offers straight to your WhatsApp</b>. No spam. Just pure savings.

        </p>
        <a href="#form">Know More</a>
      </motion.div>

      <motion.div
        className="right-container"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src="/assets/headerImg.png" alt="header" />
      </motion.div>
    </main>
  );
}

export default Hero;
