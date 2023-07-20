import React from 'react';
import './ContactUsPage.css';

import contactImage from '../../assets/images/contact-image.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page" style={{margin: "10%"}}>
      <div className="contact-container">
      <div className="contaijct-image">
          <img src={contactImage} alt="Contact" />
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
       
      </div>
      <footer className="footer">
        <div className="company-name">Pixar</div>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedin className="icon" />
          <FaInstagram className="icon" />
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;
