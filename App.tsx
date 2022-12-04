import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./src/components/TopBar";
import NeuContainer from "./src/components/NeuTest";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="content-area">
        <div className="left-func-zone"></div>
        <div className="main-display-zone"></div>
        <div className="right-func-zone"></div>
      </div>
      <div className="bottom-bar"></div>
      {/* <NeuContainer /> */}
    </BrowserRouter>
  );
}

export default App;
