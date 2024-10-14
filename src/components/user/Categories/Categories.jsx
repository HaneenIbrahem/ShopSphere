import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <section className="categories">
      {categories.map((category) => (
        <Link key={category._id} to={`/categoryDetails/${category._id}`}>
          <div  className="category">
            <img src={category.image.secure_url} />
          </div>
        </Link>
      ))}
    </section>
  );
}
