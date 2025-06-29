import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
              <h1>Online <br /> shopping  <br />Centre</h1>
        </div>

        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Our Products</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: clothshop@gmail.com</p>
          <p>Phone: +91 12345678905</p>
          <p>Location:  Shevgaon</p>
        </div>

       

      </div>

      <div className="footer-bottom">
        <p>&copy;2025 online shopping centre. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
