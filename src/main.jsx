import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Home from "./MainLayout/Pages/Home/Home.jsx";
import Register from "./MainLayout/Pages/Authentication/Register/Register.jsx";
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
import Private from "./Provider/Private.jsx";
import Details from "./MainLayout/Pages/Details/Details.jsx";
import OwnerList from "./MainLayout/Pages/Owner/OwnerList.jsx";
import OwnerDetail from "./MainLayout/Pages/Owner/OwnerDetail.jsx";
import TestLay from "./TestLay/TestLay.jsx";
import DashLayout from "./DashLayout/DashLayout.jsx";
import Profile from "./DashboardRoutes/Profile/Profile.jsx";
import Settings from "./DashboardRoutes/Settings/Settings.jsx";
import SavedProperties from "./DashboardRoutes/SavedProperties/SavedProperties.jsx";

import Login from "./MainLayout/Pages/Authentication/Login/Login.jsx";
import Reset from "./MainLayout/Pages/Authentication/Reset/Reset.jsx";
import Overview from "./DashboardRoutes/Profile/Overview";
import { Toaster } from "react-hot-toast";
import AddProperties from "./DashboardRoutes/AddProperties/AddProperties.jsx";
import RequestedProperty from "./DashboardRoutes/Requested Property/RequestedProperty.jsx";
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
        path: "/reset",
        element: <Reset />,
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
        element: <HowItWorks />,
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
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch(`http://localhost:5000/properties`),
      },
      {
        path: "/owners",
        element: (
          <Private>
            <OwnerList />
          </Private>
        ),
      },
      {
        path: "/owner-details",
        element: (
          <Private>
            <OwnerDetail />
          </Private>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  // {
  //   path: "/testlay",
  //   element: <TestLay></TestLay>
  // }
  {
    path: "dashboard",
    element: <DashLayout></DashLayout>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      // {
      //   path: 'settings',
      //   element: <Settings></Settings>
      // }
      {
        path: "saved",
        element: <SavedProperties></SavedProperties>,
      },
      {
        path: "overview",
        element: <Overview></Overview>,
      },
      {
        path: "add",
        element: <AddProperties></AddProperties>,
      },
      {
        path: "requests",
        element: <RequestedProperty />,
        loader: () => fetch(`http://localhost:5000/requested-properties`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
