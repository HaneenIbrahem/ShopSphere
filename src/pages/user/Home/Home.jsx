import React from 'react'
import Categories from '../../../components/user/Categories/Categories'
import styles from './Home.module.css'
import Products from '../../../components/user/Products/Products'

export default function Home() {
  return (
    <main className='home'>
      <section className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <span className={styles.discountLabel}>Weekend Discount</span>
        <h1>Shopping with us for better quality and the best price</h1>
        <p>We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
        <div className={styles.priceContainer}>
          <button className={styles.shopButton}>Shop Now</button>
          <div className={styles.price}>
            <span className={styles.newPrice}>$21.67</span>
            <span className={styles.oldPrice}>$26.67</span>
          </div>
        </div>
        <p className={styles.limitedOffer}>Don't miss this limited time offer.</p>
      </div>
      <div className={styles.imageContainer}>
        <img src="src/assets/imgs/elements01.png" alt="Product" />
      </div>
    </section>
      <Categories />
      <Products/>
    </main>
  )
}
