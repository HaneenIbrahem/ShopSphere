import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css"; // Import your CSS file

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const { data } = await axios.get(
      "https://ecommerce-node4.onrender.com/categories/active"
    );
    setCategories(data.categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className={styles.categories}>
      {categories.map((category) => (
        <Link key={category._id} to={`/categoryDetails/${category._id}`} className={styles.categoryLink}>
          <div className={styles.category}>
            <img src={category.image.secure_url} alt={category.name} />
          </div>
        </Link>
      ))}
    </section>
  );
}
