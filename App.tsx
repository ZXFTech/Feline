import React, { useState } from "react";
import style from "./App.module.scss";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import TopBar from "./src/components/TopBar";
import NeuContainer from "@/components/NeuContainer";
import Constructing from "@/components/Constructing";
import NeuTest from "./src/components/NeuTest";
import { BlogList } from "@/components/Blog/BlogList";
import Blog from "@/components/Blog";
import LandingPage from "@/page/LandingPage";
import Navbar from "@/components/Navbar";
import { selectTheme } from "@/redux/theme/themeSlice";
import { useSelector } from "react-redux";
import { useTheme } from "@/hooks/global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/blog/list",
    element: <BlogList />,
  },
  {
    path: "/blog/detail/:id",
    element: <Blog />,
  },
  {
    path: "/neu/test",
    element: <NeuTest />,
  },
]);

function App() {
  const theme = useSelector(selectTheme);
  return (
    <div className={style[useTheme(theme)]}>
      <Navbar />
      <div className={style["main-container"]}>
        <div className={style["left-bar"]}>
          <NeuContainer type="protuberant">
            <Constructing />
          </NeuContainer>
        </div>

        <div className={style["right-bar"]}>
          <NeuContainer type="protuberant">
            <Constructing />
          </NeuContainer>
        </div>
        <div className={style["content-bar"]}>
          <NeuContainer type="common">
            <RouterProvider router={router} />
          </NeuContainer>
        </div>
      </div>
      <div className={style.foot}>备案号: 浙ICP备2023006378号</div>
    </div>
  );
}

export default App;
