import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className={styles.testimonialsSection}>
      <h2>What Our Customers Say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        <SwiperSlide className={styles.testimonial}>
          <p>"The quality of the products is fantastic, and the customer service is second to none. Highly recommended!"</p>
          <span>- Emily R.</span>
        </SwiperSlide>
        <SwiperSlide className={styles.testimonial}>
          <p>"I’ve been shopping here for a while now, and I’m always impressed with the fast delivery and excellent selection."</p>
          <span>- Mark T.</span>
        </SwiperSlide>
        <SwiperSlide className={styles.testimonial}>
          <p>"A truly exceptional shopping experience. The website is easy to use, and the customer support team is always helpful."</p>
          <span>- Sarah K.</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
