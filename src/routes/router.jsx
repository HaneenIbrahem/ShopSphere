import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/user/Home/Home";
import Login from "../pages/user/login/login";
import Register from "../pages/user/Register/Register";
import CategoryDetails from "../pages/user/CategoryDetails/CategoryDetails";
import Product from "../pages/user/Product/Product";

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
      }
    ],
  },
]);
export default router;
