import React from "react";
import { motion } from "framer-motion";
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
        <img src="/assets/form_img.png" alt="form visual" />
      </motion.div>

      <motion.div
        className="form-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Sign up with Email</h2>
        <form>
          <input type="email" placeholder="Work Email" required />
          <div className="name-fields">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        {/* <p className="login-text">Existing User? <a href="/">Login here</a></p> */}
      </motion.div>
    </section>
  );
}

export default Form;
