import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import "./Form.css";

function Form() {
  return (
    <section className="form-container" id="form">
      <motion.div
        className="form-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src="/assets/form.png" alt="form visual" />
      </motion.div>

      <motion.div
        className="form-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Know More</h2>
        <form>
          <div className="name-fields">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="tel" maxLength={10} placeholder="Mobile Number" required />
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {/* WhatsApp CTA below the form */}
        <div className="whatsapp-cta">
          <p>Prefer a faster chat?</p>
          <a
            href="https://wa.me/919999999999" 
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Talk to us on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Form;
