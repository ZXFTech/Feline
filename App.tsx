import React, { useState } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import TopBar from "./src/components/TopBar";
import NeuContainer from "./src/components/NeuTest";
import Counter from "@/page/ReduxTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "/post/:postId",
  },
  {
    path: "/editPost/:postId",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
