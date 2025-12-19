import { useState } from "react";
import "./../Styles/contact.css";
const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="thankYouPage">
        <h2>Thank You!</h2>
        <p>
          Your message has been received. Our team will get back to you within
          24 hours.
        </p>
      </div>
    );
  }
  return (
    <div className="contactPage">
      <div className="contactHeader">
        <h1>Contact Us</h1>
        <p>
          Have a question, suggestion, or need help? We’re here to support you.
        </p>
      </div>
      <div className="contactContainer">
        <div className="contactInfo">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> helphub.support@college.edu</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Working Hours:</strong> Mon – Fri, 9 AM – 5 PM</p>
          <p className="infoNote">
            During peak times, responses may take slightly longer.
          </p>
          <div className="socialLinks">
            <span>Follow us:</span>
            <a href="https://in.linkedin.com">LinkedIn</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://x.com/">Twitter</a>
          </div>
        </div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>

          <label>Name</label>
          <input type="text" required />

          <label>Email</label>
          <input type="email" required />

          <label>Reason for Contact</label>
          <select required>
            <option value="">Select</option>
            <option>General Inquiry</option>
            <option>Complaint Support</option>
            <option>Technical Issue</option>
            <option>Feedback</option>
          </select>
          <label>Message</label>
          <textarea rows="4" required></textarea>
          <button type="submit">Submit</button>
          <p className="altContact">
            Prefer not to fill the form? Call or email us directly.
          </p>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;