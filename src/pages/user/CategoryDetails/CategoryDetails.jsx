// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';

// export default function CategoryDetails() {
    

//     const [products, setProducts] = useState([]);
//     const {categoryId} = useParams()

//   const getProducts = async () => {
//     const { data } = await axios.get(
//       `https://ecommerce-node4.onrender.com/products/category/${categoryId}`
//     );
//     setProducts(data.products);
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <section className="products">
//       {products.map((product) => (
//         <Link key={product._id} to={`/product/${product._id}`}>
//           <div  className="category">
//             <img src={product.mainImage.secure_url} />
//           </div>
//         </Link>
//       ))}
//     </section>
    
//   )
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from './CategoryDetails.module.css'; // Importing CSS module

export default function CategoryDetails() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    const { data } = await axios.get(
      `https://ecommerce-node4.onrender.com/products/category/${categoryId}`
    );
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  return (
    <section className={styles.products}>
      {products.length > 0 ? (
        products.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <div className={styles.category}>
              <img
                src={product.mainImage.secure_url}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <p className={styles.productPrice}>${product.price}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className={styles.noProducts}>
          <img
            src="src/assets/imgs/noProductFound.png" // Replace with an actual image URL
            alt="No products available"
            className={styles.noProductsImage}
          />
          <p>No products available in this category.</p>
          <button
            className={styles.backButton}
            onClick={() => navigate('/')} 
          >
            Go back to Categories
          </button>
        </div>
      )}
    </section>
  );
}
