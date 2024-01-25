import React from "react";
import ReactDOM from "react-dom/client";
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
import Private from "./Provider/Private.jsx";
import Details from "./MainLayout/Pages/Details/Details.jsx";
import OwnerList from "./MainLayout/Pages/Owner/OwnerList.jsx";
import OwnerDetail from "./MainLayout/Pages/Owner/OwnerDetail.jsx";
import TestLay from "./TestLay/TestLay.jsx";
import DashLayout from "./DashLayout/DashLayout.jsx";
import Profile from "./DashboardRoutes/Profile/Profile.jsx";
import Settings from "./DashboardRoutes/Settings/Settings.jsx";
import SavedProperties from "./DashboardRoutes/SavedProperties/SavedProperties.jsx";

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
        path: "/details",
        element: <Details></Details>,
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
    path: 'dashboard',
    element: <DashLayout></DashLayout>,
    children: [
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      // {
      //   path: 'settings',
      //   element: <Settings></Settings>
      // }
      {
        path: 'saved',
        element: <SavedProperties></SavedProperties>
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
