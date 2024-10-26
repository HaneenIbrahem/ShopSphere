import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Cart.module.css'; // Import your CSS module
import Loader from '../../../components/user/Loader/Loader';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('https://ecommerce-node4.onrender.com/cart', {
        headers: {
          Authorization: `Tariq__${localStorage.getItem('authToken')}`,
        },
      });
      console.log(data.products); // Log the cart items as objects
      setCartItems(data.products); // Store the products as an array of objects
    } catch (error) {
      console.error('Error fetching cart items:', error);
      toast.error("Error fetching cart items.", { autoClose: 1500 });
    } finally {
      setLoading(false); // Stop loading regardless of success or error
    }
  };

  const increaseQuantity = async (productId) => {
    try {
      const response = await axios.patch('https://ecommerce-node4.onrender.com/cart/incraseQuantity', {
        productId,
      }, {
        headers: {
          Authorization: `Tariq__${localStorage.getItem('authToken')}`,
        },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success("Quantity increased!", { autoClose: 1500 });
        // Update the cart items
        fetchCartItems();
      }
    } catch (error) {
      console.error('Error increasing quantity:', error);
      toast.error("Error increasing quantity.", { autoClose: 1500 });

    }
  };

  const decreaseQuantity = async (productId, currentQuantity) => {
    if (currentQuantity <= 1) {
      // If the quantity is 1 and you decrease it, remove the item from the cart
      removeItemFromCart(productId);
      return;
    }
    try {
      const response = await axios.patch('https://ecommerce-node4.onrender.com/cart/decreaseQuantity', {
        productId,
      }, {
        headers: {
          Authorization: `Tariq__${localStorage.getItem('authToken')}`,
        },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success("Quantity decreased!", { autoClose: 1500 });
        // Update the cart items
        fetchCartItems();
      }
    } catch (error) {
      console.error('Error decreasing quantity:', error);
      toast.error("Failed to decrease quantity. Please try again.", { autoClose: 1500 });
    }
  };
  

  const removeItemFromCart = async (productId) => {
    try {
      const response = await axios.patch('https://ecommerce-node4.onrender.com/cart/removeItem', {
        productId,
      }, {
        headers: {
          Authorization: `Tariq__${localStorage.getItem('authToken')}`,
        },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success("Item deleted successful!", { autoClose: 1500 });
        // Update the cartItems state to remove the item
      setCartItems((prevItems) => {
        const updatedItems = prevItems.filter(item => item.productId !== productId);
        // Update local storage
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));

        window.dispatchEvent(new Event("storage"));
        return updatedItems; // Return the updated items
      });
      }

      
    } catch (error) {
      console.error('Error removing item from cart:', error);
      toast.error("Error removing item from cart.", { autoClose: 1500 });

    }
  };

  const clearCart = async () => {
    try {
      const response = await axios.patch('https://ecommerce-node4.onrender.com/cart/clear', {}, {
        headers: {
          Authorization: `Tariq__${localStorage.getItem('authToken')}`,
        },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success("Cart cleared successfully!", { autoClose: 1500 });
        setCartItems([]);
        localStorage.setItem("cartItems", JSON.stringify([]));
        window.dispatchEvent(new Event("storage"));
      }
    } catch (error) {
      console.error('Error clearing the cart:', error);
      toast.error("Error clearing the cart.", { autoClose: 1500 });

    }
  };

  

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) {
    return <Loader />; // Show loader while data is being fetched
  }

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCartContainer}>
        <img src={"src/assets/imgs/emptyCart.jpg"} alt="Empty Cart" className={styles.emptyCartImage} />
        <p>Your cart is empty!</p>
        <button 
          onClick={() => navigate('/allProducts')} // Navigate to products page
          className={styles.goToProductsButton}
        >
          Go to Products
        </button>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Shopping Cart</h1>
      <div className={styles.orderButtonContainer}>
        <button onClick={clearCart} className={styles.clearCartButton}>
        <FaTrash/> Clear Cart
      </button>
      {/* Add the Order button here */}
      
        <button
          onClick={() => navigate('/order')} // Navigate to the order page
          className={styles.orderButton}
        >
          Proceed to Order
        </button>
      </div>
      {/* <h1 className={styles.cartTitle}>Shopping Cart</h1> */}
      <div className={styles.cartItems}>
        {cartItems.map((item) => {
          const { details, quantity, productId } = item; // Destructure details, quantity, and productId
          const totalPrice = (details.finalPrice * quantity).toFixed(2);
          return (
            <div key={item._id} className={styles.cartItem}>
              <img src={details.mainImage.secure_url} alt={details.name} className={styles.productImage} />
              <div className={styles.itemDetails}>
                <h2 className={styles.productName}>{details.name}</h2>
                <p className={styles.productPrice}>${details.finalPrice.toFixed(2)}</p>
                <p className={styles.totalPrice}>Total: ${totalPrice}</p> {/* Display total price */}
                <div className={styles.quantityControls}>
                <button onClick={() => decreaseQuantity(productId, quantity)} className={styles.decreaseButton}>
  <FaMinus />
</button>
                  <p className={styles.productQuantity}>Quantity: {quantity}</p>
                  <button onClick={() => increaseQuantity(productId,quantity)} className={styles.increaseButton}>
                    <FaPlus />
                  </button>
                </div>
                <button onClick={() => removeItemFromCart(productId)} className={styles.removeButton}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
