import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial-section">
        <div className="testimonial-container">
        <div className="left-testimonial-container">
          <p className="review">We were able to increase our revenue from the first Diwali to the second Diwali to approximately 4x of what we did and we couldn't have done this without the help of Interakt.
            <img src="/assets/quote.png" className="quote" alt="" />
          </p>
          <p className="owner">Yash Banage</p>
          <p className="owner-descp">Co-founder, Bombay Sweet Shop</p>
        </div>
        <div className="right-testimonial-container">
          <img src="/assets/testimonial.jpg" alt="" />
        </div>
        </div>

    </section>
  );
}

export default Testimonial;
