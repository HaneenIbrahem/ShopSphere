import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Contact.module.css'; // Import CSS Module
import { toast } from 'react-toastify'; // Correct import for toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

export default function Contact () {
  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form data:', values);
    toast.success("Message sent successfully!");
    resetForm();
  };

  return (
    <div className={styles.contactPage}>
      {/* Heading and Description */}
      <div className={styles.headerSection}>
        <h1>Contact With Us</h1>
        <p>
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
      </div>

      {/* Offices Section */}
      <div className={styles.officesSection}>
        <div className={styles.office}>
          <h3>Tulkarm Office</h3>
          <p>205 Middle Road, 2nd Floor, Tulkarm</p>
          <p>011-420-0349</p>
          <p>info@shopsphere.com</p>
        </div>
        <div className={styles.office}>
          <h3>Nablus Office</h3>
          <p>205 Middle Road, 2nd Floor, Nablus</p>
          <p>011-420-0349</p>
          <p>info@shopsphere.com</p>
        </div>
      </div>

      {/* Contact Form with Formik and Yup */}
      <div className={styles.formSection}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your name *"
                    className={styles.inputField}
                  />
                  <ErrorMessage name="name" component="div" className={styles.error} />
                </div>
                <div className={styles.inputGroup}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your email *"
                    className={styles.inputField}
                  />
                  <ErrorMessage name="email" component="div" className={styles.error} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your message"
                  className={styles.textArea}
                />
                <ErrorMessage name="message" component="div" className={styles.error} />
              </div>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

