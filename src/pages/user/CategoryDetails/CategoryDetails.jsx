import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function CategoryDetails() {
    

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

  const getProducts = async () => {
    const { data } = await axios.get(
      `https://ecommerce-node4.onrender.com/products/category/${categoryId}`
    );
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="products">
      {products.map((product) => (
        <Link key={product._id} to={`/product/${product._id}`}>
          <div  className="category">
            <img src={product.mainImage.secure_url} />
          </div>
        </Link>
      ))}
    </section>
    
  )
}
