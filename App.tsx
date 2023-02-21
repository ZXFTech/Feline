import React, { useState } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import TopBar from "./src/components/TopBar";
import NeuContainer from "@/components/NeuContainer";
import Constructing from "@/components/Constructing";
import NeuTest from "./src/components/NeuTest";

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
        <NeuContainer type="protuberant">
          <Constructing />
        </NeuContainer>
      </div>
      <div className="right-bar">
        <NeuContainer type="sunken">
          <Constructing />
        </NeuContainer>
      </div>
      <div className="content-bar">
        <NeuContainer type="protuberant">
          <RouterProvider router={router} />
        </NeuContainer>
      </div>
    </div>
  );
}

export default App;
