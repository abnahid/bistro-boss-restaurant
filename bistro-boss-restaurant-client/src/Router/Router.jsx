import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import MainLayout from "../layouts/MainLayout";
import Contact from "../Page/Contact/Contact";
import AddItems from "../Page/Dashboard/AddItems";
import AllUsers from "../Page/Dashboard/AllUsers";
import Cart from "../Page/Dashboard/Cart";
import ManageItems from "../Page/Dashboard/ManageItems";
import Payment from "../Page/Dashboard/Payment/Payment";
import PaymentHistory from "../Page/Dashboard/Payment/PaymentHistory";
import RateUs from "../Page/Dashboard/RateUs";
import Reservation from "../Page/Dashboard/Reservation";
import UpdateItem from "../Page/Dashboard/UpdateItem";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Login from "../Page/Login";
import OurMenu from "../Page/Menu/OurMenu";
import Order from "../Page/Order/Order";
import Register from "../Page/Register";
import AdminRoute from "./../context/AdminRoute";

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
          path: "contact-us",
          element: <Contact></Contact>,
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
          path: "payment",
          element: <Payment></Payment>,
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>,
        },
        {
          path: "reservation",
          element: <Reservation></Reservation>,
        },
        {
          path: "review",
          element: <RateUs></RateUs>,
        },
        {
          path: "users",
          element: (
            <AdminRoute>
              <AllUsers></AllUsers>
            </AdminRoute>
          ),
        },
        {
          path: "addItems",
          element: (
            <AdminRoute>
              <AddItems></AddItems>
            </AdminRoute>
          ),
        },
        {
          path: "manageItems",
          element: (
            <AdminRoute>
              <ManageItems></ManageItems>
            </AdminRoute>
          ),
        },
        {
          path: "updateItem/:id",
          element: (
            <AdminRoute>
              <UpdateItem></UpdateItem>
            </AdminRoute>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/menu/${params.id}`),
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
