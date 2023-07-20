import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor justo eu nisi viverra feugiat.</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <button type="submit">Submit</button>
          </form>
          
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123 456 7890</p>
          <p>Address: 123 Main St, City</p>
        </div>
        
        <div className="footer-column">
          <h4>Services</h4>
          
          <p>Web Development</p>
          <p>Cloud Computing</p>
          <p>Mobile Development</p>
          <p>Cybersecurity</p>
           
        </div>

        <div className="footer-column">

        <h4>Follow Us</h4>
        
        <div className="social-icons">
        

            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
          <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>    
        </div>



      </div>
     
    </footer>
  );
};

export default Footer;
