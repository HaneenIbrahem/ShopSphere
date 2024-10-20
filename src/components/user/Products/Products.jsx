import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Products.module.css"; // Import your CSS file
import Loader from "../Loader/Loader"; // Import your Loader component
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-node4.onrender.com/products?page=1&limit=10"
      );
      const nonDiscountedProducts = data.products.filter(product => product.discount === 0);
      setProducts(nonDiscountedProducts);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false); // Ensure loading is false even if there's an error
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className={styles.featuredProducts}>
      <h2>All Products</h2>
      <div className={styles.productsGrid}>
        {loading ? (
          <Loader /> // Show Loader component when loading
        ) : products.length > 0 ? (
          products.map((product) => (
            <Link key={product._id} to={`product/${product._id}`}>
            <div key={product._id} className={styles.productCard}>
              <img src={product.mainImage.secure_url} alt={product.name} />
              {/* <h3>{product.name}</h3> */}
              <p className={styles.price}>Price: ${product.price}</p>
            </div>
            </Link>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </section>
  );
}
