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
      setDiscountedProducts(productsWithDiscount);
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
      <h2>Discounted Products</h2>
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
    </section>
  );
  
}
