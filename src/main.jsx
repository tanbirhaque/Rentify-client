import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Home from "./MainLayout/Pages/Home/Home.jsx";
import Login from "./MainLayout/Pages/Login/Login.jsx";
import Register from "./MainLayout/Pages/Register/Register.jsx";
import Faq from "./MainLayout/Pages/Faq/Faq.jsx";
import ErrorPage from "./MainLayout/Pages/Error/ErrorPage.jsx";
import HowItWorks from "./MainLayout/Pages/How-It-Works/HowItWorks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
