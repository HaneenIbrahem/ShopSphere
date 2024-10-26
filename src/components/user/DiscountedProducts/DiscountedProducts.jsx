import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./DiscountedProducts.module.css"; // Import your CSS file
import Loader from "../Loader/Loader"; // Import your Loader component
import { Link } from "react-router-dom";

export default function DiscountedProducts() {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const getDiscountedProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-node4.onrender.com/products?page=1&limit=10"
      );
      const productsWithDiscount = data.products.filter(
        (product) => product.discount > 0
      );
      setDiscountedProducts(productsWithDiscount.slice(0,4));
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching discounted products:", error);
      setLoading(false); // Ensure loading is false even if there's an error
    }
  };

  useEffect(() => {
    getDiscountedProducts();
  }, []);

  return (
    <section className={styles.discountedProducts}>
      <div className={styles.discountedProductsHeader}>
        <svg width='60px' height='60px' viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M361.45 1023.91c-14.34 0-28.682-5.454-39.586-16.358L16.458 702.148c-21.84-21.84-21.84-57.348-0.016-79.172l441.16-441.158c20.48-20.48 59.956-31.526 88.092-24.636l206.536 50.646c24.588 6.062 49.332 27.854 60.19 53.004a7.998 7.998 0 0 1-4.17 10.514c-4.032 1.75-8.78-0.11-10.514-4.17-8.716-20.2-29.932-39.024-49.318-43.804L541.88 172.726c-22.886-5.624-56.3 3.75-72.968 20.402L27.754 634.288c-7.516 7.514-11.638 17.542-11.638 28.26 0 10.732 4.138 20.762 11.654 28.292l305.404 305.404c15.592 15.576 40.976 15.576 56.566-0.016l441.126-441.142c16.67-16.668 25.994-50.098 20.386-72.984l-37.336-152.266a8 8 0 0 1 5.858-9.686 8.008 8.008 0 0 1 9.672 5.876l37.336 152.264c7.014 28.588-3.796 67.298-24.606 88.106L401.05 1007.552c-10.92 10.906-25.274 16.358-39.6 16.358z" fill=""></path><path d="M663.934 423.986c-16.386 0-32.76-6.232-45.224-18.7-24.964-24.962-24.964-65.564-0.016-90.512 21.95-21.95 56.348-25.026 81.764-7.28a65.05 65.05 0 0 1 8.748 7.234 7.994 7.994 0 0 1 0.062 11.31c-3.11 3.138-8.17 3.186-11.308 0.078a48.916 48.916 0 0 0-6.61-5.468c-19.074-13.31-44.866-11.028-61.348 5.438-18.714 18.714-18.7 49.162 0.016 67.892 18.716 18.7 49.164 18.714 67.91-0.032 5.638-5.686 9.824-12.7 12.058-20.262 1.25-4.234 5.75-6.67 9.936-5.39a8 8 0 0 1 5.404 9.936c-2.982 10.092-8.542 19.418-16.074 27.01-12.496 12.498-28.916 18.746-45.318 18.746z" fill=""></path><path d="M663.824 392.026c-8.466 0-16.464-3.312-22.494-9.342a31.76 31.76 0 0 1-9.376-22.666c0.016-17.636 14.374-31.978 31.994-31.978 4.42 0 7.998 3.578 7.998 7.998s-3.578 8-7.998 8c-8.81 0-15.98 7.17-15.996 15.996a15.768 15.768 0 0 0 4.686 11.326 15.768 15.768 0 0 0 11.248 4.67h0.078a15.952 15.952 0 0 0 11.874-5.326 8 8 0 0 1 11.902 10.684 31.922 31.922 0 0 1-23.728 10.638h-0.188z" fill=""></path><path d="M663.95 368.03a8.002 8.002 0 0 1-7.81-6.31 8.024 8.024 0 0 1 6.138-9.514c281.864-60.692 345.6-302.204 345.6-344.116 0-4.42 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8c0 43.914-66.064 296.844-358.222 359.752a8.1 8.1 0 0 1-1.704 0.188z" fill=""></path><path d="M738.856 192.05a7.944 7.944 0 0 1-4.592-1.454 7.99 7.99 0 0 1-1.954-11.138C836.024 31.24 989.85 0.09 1015.908 0.09h0.016c4.42 0 7.998 3.578 7.998 8s-3.578 7.998-7.998 7.998h-0.016c-23.292 0-171.98 31.774-270.508 172.542a7.934 7.934 0 0 1-6.544 3.42zM312.1 607.95c-39.694-0.016-71.984-32.322-71.984-71.986 0-39.694 32.292-71.984 71.984-72 39.696 0.016 71.986 32.306 71.986 71.984s-32.292 71.986-71.986 72.002z m0-127.992c-30.868 0.016-55.988 25.136-55.988 56.004 0 30.854 25.122 55.974 55.988 55.99 30.87-0.016 55.99-25.136 55.99-56.006 0-30.866-25.122-55.972-55.99-55.988zM488.064 783.912c-39.696-0.016-71.986-32.322-71.986-71.984 0-39.696 32.292-71.986 71.986-72.002 39.696 0.016 71.984 32.306 71.984 72.002 0 39.662-32.288 71.968-71.984 71.984z m0-127.99c-30.87 0.016-55.988 25.136-55.988 56.006 0 30.854 25.12 55.972 55.988 55.988 30.868-0.016 55.988-25.134 55.988-55.988 0-30.87-25.12-55.99-55.988-56.006zM248.114 783.912a7.996 7.996 0 0 1-5.654-13.654l303.938-303.952a7.996 7.996 0 1 1 11.308 11.31L253.77 781.568a7.976 7.976 0 0 1-5.656 2.344z" fill=""></path></g></svg>
        <h2>Discounted Products</h2>
      </div>
      
      <div className={styles.productsGrid}>
        {loading ? (
          <Loader /> // Show Loader component when loading
        ) : discountedProducts.length > 0 ? (
          discountedProducts.map((product) => (
            <Link key={product._id} to={`product/${product._id}`}>
              <div className={styles.productCard}>
                <div className={styles.discountBadge}>
                  {product.discount}% OFF
                </div>
                <img src={product.mainImage.secure_url} alt={product.name} />
                <div className={styles.priceContainer}>
                  <p className={styles.oldPrice}>${product.price}</p>
                  <p className={styles.newPrice}>
                    ${product.price - (product.price * product.discount) / 100}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No discounted products available.</p>
        )}
      </div>
      <Link to="/allDiscountedProducts" className={styles.seeAll}>
      See All
    </Link>
    </section>
  );
  
}
