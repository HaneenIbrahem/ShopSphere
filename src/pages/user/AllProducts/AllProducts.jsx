import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AllProducts.module.css";
import Loader from "../../../components/user/Loader/Loader"; // Import your Loader component
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [product, setProduct] = useState({});

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-node4.onrender.com/products?page=1&limit=10"
      );
      // const nonDiscountedProducts = data.products.filter(product => product.discount === 0);
      setProducts(data.products);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false); // Ensure loading is false even if there's an error
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = async () => {
    event.stopPropagation();
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      console.error("User is not authenticated");
      return;
    }

    if (!product || !product.id) {
      console.error("Invalid product or product ID");
      return;
    }

    try {
      const response = await axios.post(
        "https://ecommerce-node4.onrender.com/cart",
        { productId: product.id },
        {
          headers: {
            Authorization: `Tariq__${authToken}`, // Ensure authToken format is correct
          },
        }
      );

      // Check for both 200 and 201 status codes
      if (response.status === 200 || response.status === 201) {
        toast.success("Item added successful!", { autoClose: 1500 });
        const existingCartItems =
          JSON.parse(localStorage.getItem("cartItems")) || [];

        // Add the new item to the cart
        existingCartItems.push(product);

        // Save the updated cart items back to local storage
        localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

        window.dispatchEvent(new Event("storage"));
      } else {
        console.error(
          `Failed to add product to cart, status: ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <section className={styles.featuredProducts}>
      <h2>All Products</h2>
      <div className={styles.productsGrid}>
        {loading ? (
          <Loader /> // Show Loader component when loading
        ) : products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className={styles.productCard}>
              <Link to={`/product/${product._id}`}>
                <img src={product.mainImage.secure_url} alt={product.name} />
              </Link>
              {/* <p className={styles.name}>{product.name}</p> */}

              {/* Check if product has a discount */}
              {product.discount > 0 ? (
                <>
                  <p className={styles.originalPrice}>
                    <span className={styles.strikethrough}>
                      ${product.price}
                    </span>
                  </p>
                  <p className={styles.discountedPrice}>
                    New Price: ${product.price - product.discount}
                  </p>
                </>
              ) : (
                <>
                <p className={styles.price}>${product.price}</p>
                </>
              )}
              <button
                onClick={(event) => {
                  setProduct(product);
                  handleAddToCart(event);
                }}
                className={styles.addToCart}
              >
                Add to cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </section>
  );
}
