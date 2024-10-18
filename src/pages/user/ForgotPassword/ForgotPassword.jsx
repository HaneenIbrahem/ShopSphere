import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ForgotPassword.module.css'; // Use CSS Modules for styling
import axios from 'axios';
import Loader from "/src/components/user/Loader/Loader.jsx";
import { useFormik } from 'formik';
import * as Yup from 'yup'; // For form validation

export default function ForgetPassword () {
  const [step, setStep] = useState(1); // Step 1: Send Code, Step 2: Reset Password
  const [loading, setLoading] = useState(false);

  const sendResetCode = async (email) => {
    try {
      setLoading(true);
      await axios.patch('https://ecommerce-node4.onrender.com/auth/sendcode',  {email} );
      toast.success('Reset code sent to your email!', { autoClose: 1500 });
      setStep(2); // Move to Step 2: Enter code and reset password
    } catch (error) {
      toast.error('Failed to send reset code. Please try again.', { autoClose: 1500 });
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (values) => {
    try {
      setLoading(true);
      await axios.patch('https://ecommerce-node4.onrender.com/auth/forgotPassword', values );
      toast.success('Password reset successfully!', { autoClose: 1500 });
    } catch (error) {
      toast.error('Failed to reset password. Please try again.', { autoClose: 1500 });
    } finally {
      setLoading(false);
    }
  };

  const formikStep1 = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: async (values) => {
      await sendResetCode(values.email);
    },
  });

  const formikStep2 = useFormik({
    initialValues: {
      email: formikStep1.values.email, // Reuse email from Step 1
      code: '',
      password: '',
    },
    validationSchema: Yup.object({
      code: Yup.string().required('Code is required'),
      password: Yup.string().min(5, 'Password must be at least 5 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      await resetPassword(values.email, values.password, values.code);
    },
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Forgot Password</h2>
      {loading && <Loader />}

      {!loading && step === 1 && (
        <form onSubmit={formikStep1.handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Enter your email</label>
            <input
              type="email"
              name="email"
              onChange={formikStep1.handleChange}
              onBlur={formikStep1.handleBlur}
              value={formikStep1.values.email}
              className={styles.input}
              placeholder="Enter your email"
            />
            {formikStep1.touched.email && formikStep1.errors.email ? (
              <div className={styles.error}>{formikStep1.errors.email}</div>
            ) : null}
            <button type="submit" className={styles.button}>
              Send Reset Code
            </button>
          </div>
        </form>
      )}

      {!loading && step === 2 && (
        <form onSubmit={formikStep2.handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Enter reset code</label>
            <input
              type="text"
              name="code"
              onChange={formikStep2.handleChange}
              onBlur={formikStep2.handleBlur}
              value={formikStep2.values.code}
              className={styles.input}
              placeholder="Enter the code"
            />
            {formikStep2.touched.code && formikStep2.errors.code ? (
              <div className={styles.error}>{formikStep2.errors.code}</div>
            ) : null}

            <label className={styles.label}>New Password</label>
            <input
              type="password"
              name="password"
              onChange={formikStep2.handleChange}
              onBlur={formikStep2.handleBlur}
              value={formikStep2.values.password}
              className={styles.input}
              placeholder="Enter new password"
            />
            {formikStep2.touched.password && formikStep2.errors.password ? (
              <div className={styles.error}>{formikStep2.errors.password}</div>
            ) : null}

            <button type="submit" className={styles.button}>
              Reset Password
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
