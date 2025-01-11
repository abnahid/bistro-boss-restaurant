import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import MainLayout from "../layouts/MainLayout";
import AllUsers from "../Page/Dashboard/AllUsers";
import Cart from "../Page/Dashboard/Cart";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Login from "../Page/Login";
import OurMenu from "../Page/Menu/OurMenu";
import Order from "../Page/Order/Order";
import Register from "../Page/Register";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () =>
            fetch("https://collabor-iq-server.vercel.app/testimonial"),
        },
        {
          path: "/our-menu",
          element: <OurMenu />,
        },
        {
          path: "/our-shop",
          element: <Order />,
        },

        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "cart",
          element: <Cart></Cart>,
        },
        {
          path: "users",
          element: <AllUsers></AllUsers>,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
