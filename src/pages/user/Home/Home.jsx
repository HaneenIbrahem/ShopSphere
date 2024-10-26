import React from 'react'
import Categories from '../../../components/user/Categories/Categories'
import styles from './Home.module.css'
import Products from '../../../components/user/Products/Products'
import Features from '../../../components/user/Features/Features'
import Hero from '../../../components/user/Hero/Hero'
import HealthSafetyBanner from '../../../components/user/HealthSafetyBanner/HealthSafetyBanner'
import DiscountedProducts from '../../../components/user/DiscountedProducts/DiscountedProducts'
import Testimonials from '../../../components/user/Testimonials/Testimonials'

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Hero />
      <Categories />
      <HealthSafetyBanner />
      <DiscountedProducts />
      <Products/>
      <Testimonials />
      <Features/>
    </main>
  )
}
