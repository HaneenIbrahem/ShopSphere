import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/user/Home/Home";
import Login from "../pages/user/login/login";
import Register from "../pages/user/Register/Register";
import CategoryDetails from "../pages/user/CategoryDetails/CategoryDetails";
import Product from "../pages/user/Product/Product";
import About from "../pages/user/About/About";
import Contact from "../pages/user/Contact/Contact";
import ForgotPassword from "../pages/user/ForgotPassword/ForgotPassword"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "categoryDetails/:categoryId",
        element: <CategoryDetails />
      },
      {
        path: "product/:productId",
        element: <Product />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />
      }
    ],
  },
]);
export default router;
