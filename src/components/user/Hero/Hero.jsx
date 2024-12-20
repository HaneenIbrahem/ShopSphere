import React from 'react'
import styles from './Hero.module.css'
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <span className={styles.discountLabel}>Weekend Discount</span>
        <h1>Shopping with us for better quality and the best price</h1>
        <p>We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
        <div className={styles.priceContainer}>
          <button onClick={() => navigate('/allProducts')} className={styles.shopButton}>Shop Now</button>
          {/* <div className={styles.price}>
            <span className={styles.newPrice}>$21.67</span>
            <span className={styles.oldPrice}>$26.67</span>
          </div> */}
        </div>
        <p className={styles.limitedOffer}>Don't miss this limited time offer.</p>
      </div>
      <div className={styles.imageContainer}>
        <img src="src/assets/imgs/2.jpg" alt="Product" />
      </div>
    </section>
  )
}
