import React from 'react';
import '../style/Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="whatsapp-contact">
          <h3>Or reach us on WhatsApp:</h3>
          <a
            href="https://wa.me/+254723744411"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;