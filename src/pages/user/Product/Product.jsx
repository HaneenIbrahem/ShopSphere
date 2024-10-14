import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Product() {

    const [product, setProduct] = useState({});
    const [productImages, setProductImages] = useState([])

    const {productId} = useParams()

  const getProducts = async () => {
    const { data } = await axios.get(
      `https://ecommerce-node4.onrender.com/products/${productId}`
    );
    setProduct(data.product);
    setProductImages(data.product.subImages)
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className='product'>
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        {productImages.map((img) => <img key={img.public_id} src={img.secure_url} />)}
    </section>
  )
}
