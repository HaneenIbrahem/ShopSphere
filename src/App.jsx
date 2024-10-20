import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './pages/user/Cart/CartContext';

export default function App() {
  return <>
   <CartProvider>
    <RouterProvider router = {router} />
    <ToastContainer />
    </CartProvider>
    </>
}
