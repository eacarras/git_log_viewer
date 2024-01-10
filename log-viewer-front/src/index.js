import React from 'react'
import { createRoot } from "react-dom/client";

import Home from './home/Home'
import NotFound from './notFound/NotFound'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

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
)
