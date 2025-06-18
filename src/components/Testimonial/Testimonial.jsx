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
            We were able to increase our revenue from the first Diwali to the
            second Diwali to approximately 4x of what we did and we couldn't
            have done this without the help of Interakt.
            <img src="/assets/quote.png" className="quote" alt="quote" />
          </p>
          <p className="owner">Yash Banage</p>
          <p className="owner-descp">Co-founder, Bombay Sweet Shop</p>
        </motion.div>

        <motion.div
          className="right-testimonial-container"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src="/assets/testimonial.jpg" alt="testimonial" />
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
