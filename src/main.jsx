import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Home from "./MainLayout/Pages/Home/Home.jsx";
import Register from "./MainLayout/Pages/Authentication/Register/Register.jsx";
import Bloggrid from "./MainLayout/Pages/Blog/Bloggrid.jsx";
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
// import TestLay from "./TestLay/TestLay.jsx";
import DashLayout from "./DashLayout/DashLayout.jsx";
import Profile from "./DashLayout/DashboardRoutes/Profile/Profile.jsx";
// import Settings from "./DashLayout/DashboardRoutes/Settings/Settings.jsx";
import SavedProperties from "./DashLayout/DashboardRoutes/SavedProperties/SavedProperties.jsx";

import Login from "./MainLayout/Pages/Authentication/Login/Login.jsx";
import Reset from "./MainLayout/Pages/Authentication/Reset/Reset.jsx";
// Merged from Development updated code by Rana
import Overview from "./DashLayout/DashboardRoutes/Profile/Overview";
import { Toaster } from "react-hot-toast";
import AddProperties from "./DashLayout/DashboardRoutes/AddProperties/AddProperties.jsx";
import RequestedProperty from "./DashLayout/DashboardRoutes/Requested Property/RequestedProperty.jsx";
import ManageProperties from "./DashLayout/DashboardRoutes/ManageProperties/ManageProperties.jsx";
import Payment from "./DashLayout/DashboardRoutes/Payment/Payment.jsx";
// Import links below by Sadia-dev
import NewYork from "./MainLayout/Pages/Home/HomeComponents/PopularCities/NewYork/NewYork.jsx";
import Prauge from "./MainLayout/Pages/Home/HomeComponents/PopularCities/Prauge/Prauge.jsx";
import Florida from "./MainLayout/Pages/Home/HomeComponents/PopularCities/Florida/Florida.jsx";
import SanFransisco from "./MainLayout/Pages/Home/HomeComponents/PopularCities/SanFransisco/SanFransisco.jsx";
import TorentoCity from "./MainLayout/Pages/Home/HomeComponents/PopularCities/TorentoCity/TorentoCity.jsx";
import VancuverCity from "./MainLayout/Pages/Home/HomeComponents/PopularCities/VancuverCity/VancuverCity.jsx";
import MontrealCity from "./MainLayout/Pages/Home/HomeComponents/PopularCities/MontrealCity/MontrealCity.jsx";
import LosAngeles from "./MainLayout/Pages/Home/HomeComponents/PopularCities/LosAngeles/LosAngeles.jsx";
//Import links below by konika
import BuyRequest from "./DashLayout/DashboardRoutes/BuyRequest/BuyRequest.jsx";
import RentRequest from "./DashLayout/DashboardRoutes/RentRequest/RentRequest.jsx";
import SoldProperties from "./DashLayout/DashboardRoutes/SoldProperties/SoldProperties.jsx";
import RentOutProperties from "./DashLayout/DashboardRoutes/RentOutProperties/RentOutProperties.jsx";
import WriteBlogs from "./DashLayout/DashboardRoutes/WriteBlogs/WriteBlogs.jsx";
import UserProfile from "./DashLayout/DashboardRoutes/UserProfile/UserProfile.jsx";
import OwnerRequestForm from "./DashLayout/DashboardRoutes/Owner Request/OwnerRequestForm.jsx";

import Contact from "./MainLayout/Pages/Contact/Contact.jsx";
import AllPropertiesMod from "./MainLayout/Pages/Home/HomeComponents/AllProperties/AllPropertiesMod.jsx";

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
        path: "/all",
        element: <AllPropertiesMod></AllPropertiesMod>,
      },
      {
        path: "/blogs",
        element: <Bloggrid></Bloggrid>,
      },
      {
        path: "/blogs/:id",
        element: <Blogdetails></Blogdetails>,
        loader: () => fetch("http://localhost:5000/blogs"),
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
        path: "/contact",
        element: <Contact></Contact>,
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
        path: "/newyork/:city",
        element: <NewYork></NewYork>,
      },
      {
        path: "/Prauge/:city",
        element: <Prauge></Prauge>,
      },
      {
        path: "/Florida/:city",
        element: <Florida></Florida>,
      },
      {
        path: "/SanFransisco/:city",
        element: <SanFransisco></SanFransisco>,
      },
      {
        path: "/TorentoCity/:city",
        element: <TorentoCity></TorentoCity>,
      },
      {
        path: "/VancuverCity/:city",
        element: <VancuverCity></VancuverCity>,
      },
      {
        path: "/MontrealCity/:city",
        element: <MontrealCity></MontrealCity>,
      },
      {
        path: "/LosAngeles/:city",
        element: <LosAngeles></LosAngeles>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch(`http://localhost:5000/properties`),
      },
      {
        path: "/owners",
        element: <OwnerList />,
      },
      // {
      //   path: "/owner-details",
      //   element: <OwnerDetail />,
      // },
      {
        path: "/owner-details/:id",
        element: <OwnerDetail />,
        loader: () => fetch("http://localhost:5000/ownerRequest"),
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

  // Dashboard routes here
  {
    path: "dashboard",
    element: (
      <Private>
        <DashLayout></DashLayout>
      </Private>
    ),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
        // children: [
        //   {
        //     path: "dashboard/profile",
        //     element: <Overview></Overview>,
        //   }
        // ]
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      // {
      //   path: 'settings',
      //   element: <Settings></Settings>
      // }
      {
        path: "saved",
        element: <SavedProperties></SavedProperties>,
      },
      // {
      //   path: "dashboard",
      //   element: <Overview></Overview>,
      // },
      {
        path: "add",
        element: <AddProperties></AddProperties>,
      },
      {
        path: "manage",
        element: <ManageProperties />,
      },
      {
        path: "my-requests",
        element: <RequestedProperty />,
        loader: () => fetch(`http://localhost:5000/requested-properties`),
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "rentReq",
        element: <RentRequest />,
      },
      {
        path: "buyReq",
        element: <BuyRequest />,
      },
      {
        path: "soldProperties",
        element: <SoldProperties />,
      },
      {
        path: "rentOutProperties",
        element: <RentOutProperties />,
      },
      {
        path: "writeBlogs",
        element: <WriteBlogs></WriteBlogs>,
      },
      {
        path: "ownerRequest",
        element: <OwnerRequestForm />,
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
