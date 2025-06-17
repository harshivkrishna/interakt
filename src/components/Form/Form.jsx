import React from "react";
import "./Form.css";

function Form() {
  return (
    <section className="form-container" id="form">
      <div className="form-left">
        <img src="/assets/form_img.png" alt="" />
      </div>

      <div className="form-right">
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
      </div>
    </section>
  );
}

export default Form;
