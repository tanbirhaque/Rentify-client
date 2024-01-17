import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './MainLayout/Pages/Home/Home.jsx';
import Login from './MainLayout/Pages/Login/Login';
import Register from './MainLayout/Pages/Register/Register';
import Bloggrind from './MainLayout/Pages/Blog/Bloggrind.jsx';
import Faq from "./MainLayout/Pages/Faq/Faq.jsx";
import ErrorPage from "./MainLayout/Pages/Error/ErrorPage.jsx";
import HowItWorks from "./MainLayout/Pages/How-It-Works/HowItWorks.jsx";

// Import Tanstack
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Blogdetails from './MainLayout/Pages/Blog/Blogdetails.jsx';
import Testimonials from './MainLayout/Pages/Testimonials/Testimonials.jsx';
const queryClient = new QueryClient()

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
        element: <Register></Register>
      },
      {
        path: "/blogs",
        element: <Bloggrind></Bloggrind>
      },
      {
        path: "/blogs/:id",
        element: <Blogdetails></Blogdetails>,
        loader: () => fetch('/Blogs.json')
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
        element: <Testimonials></Testimonials>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode >
);
