import React from 'react'
import { createRoot } from "react-dom/client";

import Home from './home/Home'
import NotFound from './notFound/NotFound'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import reportWebVitals from './reportWebVitals'

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"*",
    exact: true,
    component: <NotFound />
  }
])

// Initialize the root
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// TODO: YOU CAN USE AN ANALYTIICS ENDPOINT
reportWebVitals(console.log);
