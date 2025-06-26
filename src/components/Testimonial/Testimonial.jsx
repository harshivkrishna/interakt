import React from "react";
import { motion } from "framer-motion";
import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <motion.div
          className="left-testimonial-container"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="review">
          We&apos;ve seen a massive jump in repeat orders and faster table reservations after integrating our WhatsApp workflows. From menu queries to real-time bookings, everything&apos;s more seamless — and that&apos;s been a game-changer for us.
            <img src="/assets/quote.png" className="quote" alt="quote" />
          </p>
          <p className="owner">Aditya Vardhan</p>
          <p className="owner-descp">Co-Founder, Triple Ivy Foods</p>
        </motion.div>

        <motion.div
          className="right-testimonial-container"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src="/assets/testimonial.png" alt="testimonial" />
        </motion.div>
      </div>

      <div className="testimonial-review">
        <div className="review-container">
          <h2>1.56L</h2>
          <p>revenue generated in a day</p>
        </div>
        <div className="review-container">
          <h2>40%</h2>
          <p>customer queries handled by Boondi - the bot</p>
        </div>
        <div className="review-container">
          <h2>4X</h2>
          <p>increase in revenue since onboarding with Interakt</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
