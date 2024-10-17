import React from 'react';
import styles from './Footer.module.css'; // Custom styles
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* Newsletter Section at the top */}
        <div className={`${styles.footerSection} ${styles.newsletterSection}`}>
          <h3>Join our newsletter for £10 off</h3>
          <p>Register now to get the latest updates on promotions & coupons. Don’t worry, we won’t spam!</p>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Enter your email address"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              SEND
            </button>
          </div>
          <small>By subscribing you agree to our <Link to="/terms">Terms & Conditions</Link> and <Link to="/privacy">Privacy & Cookies Policy</Link>.</small>
        </div>

        {/* About Us Section */}
        <div className={`${styles.footerSection} ${styles.footerSectionAbout}`}>
          <h3>About Us</h3>
          <p>ShopSphere is your go-to destination for a wide variety of products, from beauty essentials to daily must-haves. We strive to provide quality and convenience in every purchase. Thank you for shopping with us!</p>
        </div>

        {/* Quick Links Section */}
        <div className={`${styles.footerSection} ${styles.footerSectionLinks}`}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className={`${styles.footerSection} ${styles.footerSectionContact}`}>
          <h3>Contact Us</h3>
          <p>📧 Email: info@shopsphere.com</p>
          <p>📞 Phone: 011-420-0349</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 ShopSphere | All Rights Reserved</p>
      </div>
    </footer>
  );
}
