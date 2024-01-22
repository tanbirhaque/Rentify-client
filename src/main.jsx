import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Home from "./MainLayout/Pages/Home/Home.jsx";
import Login from "./MainLayout/Pages/Login/Login";
import Register from "./MainLayout/Pages/Register/Register";
import Bloggrind from "./MainLayout/Pages/Blog/Bloggrind.jsx";
import Faq from "./MainLayout/Pages/Faq/Faq.jsx";
import ErrorPage from "./MainLayout/Pages/Error/ErrorPage.jsx";
import HowItWorks from "./MainLayout/Pages/How-It-Works/HowItWorks.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
// Import Tanstack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Blogdetails from "./MainLayout/Pages/Blog/Blogdetails.jsx";
import Testimonials from "./MainLayout/Pages/Testimonials/Testimonials.jsx";
import Privacy from "./MainLayout/Pages/PrivacyPolicy/Privacy.jsx";
import Condition from "./MainLayout/Pages/Terms & Conditions/Condition.jsx";
import { Toaster } from "react-hot-toast";
import Details from "./MainLayout/Pages/Details/Details.jsx";
import TestLay from "./TestLay/TestLay.jsx";
import Private from "./Provider/Private.jsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // Removed this element for error handling purpose, please don't re add this
    // errorElement: <ErrorPage />,
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
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Bloggrind></Bloggrind>,
      },
      {
        path: "/blogs/:id",
        element: <Blogdetails></Blogdetails>,
        loader: () => fetch("/Blogs.json"),
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/how-it-works",
        element: (
          <Private>
            <HowItWorks />
          </Private>
        ),
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/conditions",
        element: <Condition></Condition>,
      },
      {
        path: "/details",
        element: <Details></Details>
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
  // {
  //   path: "/testlay",
  //   element: <TestLay></TestLay>
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
