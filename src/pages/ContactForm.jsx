import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the terms before submitting.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Get In Touch</h2>
      <p>We’d love to hear from you! Fill out the form below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <div className="terms">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <label>
            I agree to the{" "}
            <a href="#!" target="_blank" rel="noopener noreferrer">
              terms & conditions
            </a>
            . Your data is protected and will never be shared.
          </label>
        </div>

        <button type="submit" disabled={!formData.agree}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
