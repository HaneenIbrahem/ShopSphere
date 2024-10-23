import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './Order.module.css'; // Import CSS module

// Validation schema
const OrderSchema = Yup.object().shape({
  couponName: Yup.string(),
  address: Yup.string()
    .min(5, 'Address must be at least 5 characters')
    .required('Address is required'),
  phone: Yup.string()
    .matches(/^05\d{8}$/, 'Phone must be a valid Palestinian number (starting with 05)')
    .required('Phone number is required'),
});

const createOrder = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        'https://ecommerce-node4.onrender.com/order',
        {
          couponName: values.couponName,
          address: values.address,
          phone: values.phone,
        },
        {
          headers: {
            Authorization: `Tariq__${localStorage.getItem("authToken")}`,
          },
        }
      );
      toast.success('Order placed successfully!');
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200
        toast.error(error.response.data.message || 'Error placing order. Please try again.');
      } else if (error.request) {
        // Request was made but no response was received
        toast.error('No response from the server. Please check your connection.');
      } else {
        // Something else happened
        toast.error('An unexpected error occurred.');
      }
    }
    setSubmitting(false);
}

// const clearCart = async () => {
//   try {
//     const response = await axios.patch('https://ecommerce-node4.onrender.com/cart/clear', {}, {
//       headers: {
//         Authorization: `Tariq__${localStorage.getItem('authToken')}`,
//       },
//     });
//     if (response.status === 200 || response.status === 201) {
//       toast.success("Cart cleared successfully!", { autoClose: 1500 });
//       setCartItems([]);
//       localStorage.setItem("cartItems", JSON.stringify([]));
//       window.dispatchEvent(new Event("storage"));
//     }
//   } catch (error) {
//     console.error('Error clearing the cart:', error);
//     toast.error("Error clearing the cart.", { autoClose: 1500 });

//   }
// };

const OrderForm = () => {
  return (
    <div className={styles.orderFormContainer}>
      <h2 className={styles.formTitle}>Place Your Order</h2>

      <Formik
        initialValues={{ couponName: '', address: '', phone: '' }}
        validationSchema={OrderSchema}
        onSubmit={createOrder}
      >
        {({ isSubmitting }) => (
          <Form className={styles.orderForm}>
            <div>
              <label htmlFor="couponName" className={styles.formLabel}>Coupon</label>
              <Field
                type="text"
                name="couponName"
                placeholder="Enter your coupon code (optional)"
                className={styles.formInput}
              />
              <ErrorMessage name="couponName" component="div" className={styles.error} />
            </div>

            <div>
              <label htmlFor="address" className={styles.formLabel}>Address</label>
              <Field
                type="text"
                name="address"
                placeholder="Enter your address"
                className={styles.formInput}
              />
              <ErrorMessage name="address" component="div" className={styles.error} />
            </div>

            <div>
              <label htmlFor="phone" className={styles.formLabel}>Phone</label>
              <Field
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                className={styles.formInput}
              />
              <ErrorMessage name="phone" component="div" className={styles.error} />
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Placing Order...' : 'Proceed to Order'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
