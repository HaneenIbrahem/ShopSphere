import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styles from "./Login.module.css";
import Loader from "/src/components/user/Loader/Loader.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const initialValuesLogin = {
    email: "",
    password: "",
    remember: false,
  };

  const initialValuesRegister = {
    username: "",
    email: "",
    password: "",
  };

  const getValidationSchema = (isRegistering) =>
    Yup.object({
      username: isRegistering
        ? Yup.string().required("Username is required").min(1)
        : null,
      email: Yup.string()
        .email("Invalid email format")
        .required("Email address is required")
        .min(5)
        .max(50),
      password: Yup.string().required("Password is required"),
    });

    async function onSubmitLogin(values, { setErrors, setSubmitting }) {
      try {
        const { data } = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`, values);
        const token = data.token; 
        
        // Save token to local storage
        localStorage.setItem('authToken', token);
  
        //  Remember Me feature
        if (values.remember) {
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberMe');
        }
  
        toast.success("Login successful!");
        navigate('/'); // Adjust based on your routing
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data.errors;
          if (serverErrors) {
            const fieldErrors = {};
            serverErrors.forEach((err) => {
              fieldErrors[err.param] = err.msg;
              toast.error(`${err.param.charAt(0).toUpperCase() + err.param.slice(1)}: ${err.msg}`);
            });
            setErrors(fieldErrors); 
          } else if (error.response.data.message) {
            toast.error(`Error: ${error.response.data.message}`);
          } else {
            toast.error("Login failed. Please try again.");
          }
        } else {
          console.error('Error during login:', error);
          toast.error("An unexpected error occurred.");
        }
      } finally {
        setSubmitting(false); // Turn off loader
      }
    }

  async function onSubmitRegister(values, { setErrors, setSubmitting }) {
    try {
      const { data } = await axios.post(
        `https://ecommerce-node4.onrender.com/auth/signup`,
        values
      );
      console.log(data);
      toast.success("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        const serverErrors = error.response.data.errors;
        if (serverErrors) {
          const fieldErrors = {};
          serverErrors.forEach((err) => {
            fieldErrors[err.param] = err.msg; // Assuming your backend uses this format
            toast.error(
              `${err.param.charAt(0).toUpperCase() + err.param.slice(1)}: ${
                err.msg
              }`
            );
          });
          setErrors(fieldErrors); // show field-specific errors
        } else if (error.response.data.message) {
          toast.error(`Error: ${error.response.data.message}`);
        } else {
          toast.error("Registration failed. Please try again.");
        }
      } else {
        console.error("Error during registration:", error);
        toast.error(`Error: ${error.response.data.message}`);
      }
    } finally {
      setSubmitting(false); // Turn off loader
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.heading}>
          <span
            className={isRegistering ? styles.inactiveTab : styles.activeTab}
            onClick={() => setIsRegistering(false)}
          >
            Login
          </span>
          <span
            className={isRegistering ? styles.activeTab : styles.inactiveTab}
            onClick={() => setIsRegistering(true)}
          >
            Register
          </span>
        </h2>

        {isRegistering ? (
          // Register form
          <>
            <p className={styles.subtitle}>
              There are many advantages to creating an account: the payment
              process is faster, shipment tracking is possible, and much more.
            </p>
            <Formik
              initialValues={initialValuesRegister}
              validationSchema={getValidationSchema(isRegistering)}
              onSubmit={onSubmitRegister}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className={styles.formGroup}>
                    <label htmlFor="username">Username *</label>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className={styles.inputField}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email address *</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={styles.inputField}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="password">Password *</label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className={styles.inputField}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.loginButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Loader /> : "Register"}
                  </button>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          // Login form
          <>
            <p className={styles.subtitle}>
              If you have an account, sign in with your email address.
            </p>
            <Formik
              initialValues={initialValuesLogin}
              validationSchema={getValidationSchema(isRegistering)}
              onSubmit={onSubmitLogin}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email address *</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={styles.inputField}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="password">Password *</label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className={styles.inputField}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.checkboxGroup}>
                    <div>
                      <Field
                        type="checkbox"
                        id="remember"
                        name="remember"
                        className={styles.checkbox}
                      />
                      <label htmlFor="remember" className={styles.rememberText}>
                        Remember me
                      </label>
                    </div>
                    <Link to="/forgotPassword" className={styles.forgotPassword}>
                      Lost your password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className={styles.loginButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Loader /> : "Log in"}
                  </button>
                </Form>
              )}
            </Formik>
          </>
        )}
      </div>
    </div>
  );
}
