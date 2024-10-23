import axios from 'axios';
import React, {useContext , useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/user/Loader/Loader'; // Import the Loader component
import styles from './Product.module.css'; // Import the CSS module for styling
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Product() {
  const [product, setProduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false); 
  const [comment, setComment] = useState(""); // New state for comment
  const [rating, setRating] = useState(1); // New state for rating (default to 1)
  const { productId } = useParams();

  console.log(`productId ${productId}`)

  

  const handleAddReview = async () => {
    if (!comment.trim()) {
      toast.error("Comment cannot be empty", { autoClose: 1500 });
      return;
    }

    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      console.error("User is not authenticated");
      return;
    }

    try {
      const ordersResponse = await axios.get(
        'https://ecommerce-node4.onrender.com/order', // API to get the user's orders
        {
          headers: {
            Authorization: `Tariq__${authToken}`, // Ensure the token is properly attached
          },
        }
      );
      // Check if the product exists in any of the user's orders
    const userOrders = ordersResponse.data.orders; // Assuming the API returns an array of orders
    console.log(userOrders)
    // const hasOrderedProduct = userOrders.some(order =>
    //   order.products.some(product => product.id === productId),
    //   console.log(`product.id ${product.id}`)
    // );

    const hasOrderedProduct = userOrders.some(order =>
      order.products.some(p => {
        const productIdValue = p.productId._id; 
        console.log("Product object:", p); 
        console.log(`Comparing product ID: ${productIdValue} with productId: ${productId}`);
        return productIdValue === productId; 
      })
    );

    if (!hasOrderedProduct) {
      toast.error("You can only review products you have ordered", { autoClose: 1500 });
      return;
    }

    // Step 2: Submit the review if the product was ordered
    const reviewResponse = await axios.post(
      `https://ecommerce-node4.onrender.com/products/${productId}/review`,
      {
        comment: comment,
        rating: rating,
      },
      {
        headers: {
          Authorization: `Tariq__${authToken}`, 
        },
      }
    );

    if (reviewResponse.status === 200 || reviewResponse.status === 201) {
      toast.success("Review submitted successfully!", { autoClose: 1500 });
      setComment(""); // Clear the comment field after submission
      setRating(1); // Reset rating
    } else {
      console.error(`Failed to submit review, status: ${reviewResponse.status}`);
    }
  } catch (error) {
    console.error("Error verifying order or submitting review:", error);
  }

    // try {
    //   const response = await axios.post(
    //     `https://ecommerce-node4.onrender.com/products/${productId}/review`,
    //     {
    //       comment: comment,
    //       rating: rating
    //     },
    //     {
    //       headers: {
    //         Authorization: `Tariq__${localStorage.getItem("authToken")}`, 
    //       },
    //     }
    //   );

    //   if (response.status === 200 || response.status === 201) {
    //     toast.success("Review submitted successfully!", { autoClose: 1500 });
    //     setComment(""); // Clear the comment field after submission
    //     setRating(1); // Reset rating
    //   } else {
    //     console.error(`Failed to submit review, status: ${response.status}`);
    //   }
    // } catch (error) {
    //   console.error("Error submitting review:", error);
    // }
  };

  const handleAddToCart = async () => {
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
      const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  

      // Add the new item to the cart
      existingCartItems.push(product);

      // Save the updated cart items back to local storage
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

      window.dispatchEvent(new Event("storage"));
    } else {
      console.error(`Failed to add product to cart, status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
    // try {
    //   const response = await axios.post("https://ecommerce-node4.onrender.com/cart", {
    //     productId: product.id,
    //   }, {
    //     headers: {
    //       Authorization: `Tariq__${localStorage.getItem("authToken")}`, 
    //     },
    //   });

    //   if (response.status === 200) {
    //     addToCart(product); 
    //   } else {
    //     console.error("Failed to add product to cart, status:", response.status);
    //   }
    // } catch (error) {
    //   console.error("Error adding product to cart", error);
    // }
  };

  // const handleDecreaseQuantity = async () => {
  //   try {
  //     const response = await axios.patch("http://localhost:5173/cart/decraseQuantity", {
  //       productId: product.id,
  //     }, {
  //       headers: {
  //         Authorization: localStorage.getItem("authToken"),
  //       },
  //     });

  //     if (response.status === 200) {
  //       setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Decrease quantity but not below 1
  //     }
  //   } catch (error) {
  //     console.error("Error decreasing quantity", error);
  //   }
  // };

  const getProducts = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://ecommerce-node4.onrender.com/products/${productId}`
    );
    setProduct(data.product);
    setProductImages(data.product.subImages);
    if (data.product.subImages.length > 0) {
      setMainImage(data.product.subImages[0].secure_url);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleThumbnailClick = (imgUrl) => {
    setMainImage(imgUrl);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription); // Toggle the description visibility
  };

  if (loading) {
    return <Loader />;
  }

  const truncatedDescription =
    product.description && product.description.length > 200
      ? product.description.slice(0, product.description.length / 2) + '...'
      : product.description;

  return (
    <section className={styles.productDetails}>
      <div className={styles.productContainer}>
        <div className={styles.imageGallery}>
          <div className={styles.mainImageContainer}>
            {mainImage && (
              <img
                src={mainImage}
                alt={product.name}
                className={styles.mainProductImage}
              />
            )}
          </div>
          <div className={styles.thumbnailContainer}>
            {productImages.map((img) => (
              <img
                key={img.public_id}
                src={img.secure_url}
                alt={product.name}
                className={styles.thumbnailImage}
                onClick={() => handleThumbnailClick(img.secure_url)}
              />
            ))}
          </div>
        </div>

        <div className={styles.productInfo}>
          <h2 className={styles.productName}>{product.name}</h2>

          {product.discount > 0 ? (
            <div className={styles.priceSection}>
              <span className={styles.oldPrice}>${product.price}</span>
              <span className={styles.currentPrice}>
                ${product.price - (product.price * product.discount) / 100}
              </span>
            </div>
          ) : (
            <div className={styles.priceSection}>
              <span className={styles.currentPrice}>${product.price}</span>
            </div>
          )}

          {/* Product Description with "See More" functionality */}
          <p className={styles.productDescription}>
            {showFullDescription ? product.description : truncatedDescription}
          </p>
          <button onClick={toggleDescription} className={styles.toggleButton}>
            {showFullDescription ? 'See Less' : 'See More'}
          </button>

          {product.discount > 0 && (
            <div className={styles.countdownTimer}>
              <span>Special Offer Ends In:</span>
              <div className={styles.timerBoxes}>
                <span>81</span>:<span>06</span>:<span>50</span>:<span>02</span>
              </div>
            </div>
          )}

          {/* Quantity Control */}
          {/* <div className={styles.quantityControl}>
            <button onClick={handleDecreaseQuantity} className={styles.decreaseQuantityButton}>-</button>
            <span className={styles.quantity}>{quantity}</span>
            <button onClick={() => setQuantity(prevQuantity => prevQuantity + 1)} className={styles.increaseQuantityButton}>+</button>
          </div> */}

          <div className={styles.actionButtons}>
            <button onClick={handleAddToCart} className={styles.addToCartButton}>Add to Cart</button>
            {/* <button className={styles.buyNowButton}>Buy Now</button> */}
            <button className={styles.shareButton}>Share</button>
            </div>

          {/* <div className={styles.extraButtons}>
            <button className={styles.wishlistButton}>Add to Wishlist</button>
            <button className={styles.shareButton}>Share</button>
            <button className={styles.compareButton}>Compare</button>
          </div> */}

          {/* Review Form */}
        <div className={styles.reviewSection}>
          <h3>Leave a Review</h3>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave your comment here"
            className={styles.reviewTextarea}
          />
          <div className={styles.ratingSection}>
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className={styles.ratingSelect}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <button onClick={handleAddReview} className={styles.submitReviewButton}>
            Submit Review
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
