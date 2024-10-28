import React from 'react';
import styles from './About.module.css'; // Import the CSS Module

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1>About Us</h1>
        <p>
          We’re passionate about delivering the best products to our customers. Our journey started with a simple vision and has grown into a leading platform for quality and convenience.
        </p>
      </div>

      {/* About Section */}
      <div className={styles.aboutSection}>
        <h2>Who We Are</h2>
        <p>
          Our company was founded on the idea that high-quality products should be easily accessible to everyone. From our humble beginnings, we have grown into a trusted name, offering a wide range of products to customers across the globe.
        </p>
      </div>

      {/* Mission Section */}
      <div className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          To provide the best quality products with a seamless online shopping experience. We are dedicated to sustainability and innovation, constantly working towards making our products better for you and the planet.
        </p>
      </div>

      {/* Team Section */}
      <div className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamContainer}>
          <div className={styles.teamMember}>
            <img src="src/assets/imgs/team1.jpg" alt="Team Member 1" className={styles.teamImage} />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.teamMember}>
            <img src="src/assets/imgs/team7.jpg" alt="Team Member 2" className={styles.teamImage} />
            <h3>Jane Smith</h3>
            <p>Head of Marketing</p>
          </div>
          <div className={styles.teamMember}>
            <img src="src/assets/imgs/team3.jpg" alt="Team Member 3" className={styles.teamImage} />
            <h3>Michael Brown</h3>
            <p>Chief Technology Officer</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={styles.testimonialsSection}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonial}>
          <p>"The quality of the products is fantastic, and the customer service is second to none. Highly recommended!"</p>
          <span>- Emily R.</span>
        </div>
        <div className={styles.testimonial}>
          <p>"I’ve been shopping here for a while now, and I’m always impressed with the fast delivery and excellent selection."</p>
          <span>- Mark T.</span>
        </div>
        <div className={styles.testimonial}>
          <p>"A truly exceptional shopping experience. The website is easy to use, and the customer support team is always helpful."</p>
          <span>- Sarah K.</span>
        </div>
      </div>
    </div>
  );
};

export default About;
