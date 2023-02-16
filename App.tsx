import React, { useState } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import TopBar from "./src/components/TopBar";
import NeuContainer from "./src/components/NeuTest";
import Constructing from "@/components/Constructing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>index</>,
  },
  {
    path: "/1",
    element: <>1</>,
  },
  {
    path: "/2",
    element: <>2</>,
  },
  {
    path: "/3",
    element: <>3</>,
  },
]);

function App() {
  return (
    <div className="main-container">
      <div className="left-bar">
        <Constructing />
      </div>
      <div className="right-bar">
        <Constructing />
      </div>
      <div className="content-bar">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
