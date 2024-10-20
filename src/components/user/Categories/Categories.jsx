import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css"; // Import your CSS file
import Loader from "../Loader/Loader"; // Import your Loader component

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-node4.onrender.com/categories/active"
      );
      setCategories(data.categories);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false); // Ensure loading is false even if there's an error
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className={styles.categories}>
      {loading ? (
        <Loader /> // Show Loader component when loading
      ) : (
        categories.map((category) => (
          <Link
            key={category._id}
            to={`/categoryDetails/${category._id}`}
            className={styles.categoryLink}
          >
            <div className={styles.category}>
              <img src={category.image.secure_url} alt={category.name} />
            </div>
          </Link>
        ))
      )}
    </section>
  );
}
