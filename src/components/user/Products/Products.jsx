import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Products.module.css"; // Import your CSS file

export default function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-node4.onrender.com/products?page=1&limit=10"
      );
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className={styles.featuredProducts}>
      <h2>Featured Products</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product._id} className={styles.productCard}>
            <img src={product.mainImage.secure_url} alt={product.name} />
            <h3>{product.name}</h3>
            {/* <p>{product.description}</p> */}
            <p className={styles.price}>Price: ${product.price}</p>
            {product.discount > 0 && (
              <p className={styles.discount}>Discount: {product.discount}%</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
