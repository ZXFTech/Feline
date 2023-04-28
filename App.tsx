import React, { useState } from "react";
import style from "./App.module.scss";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import TopBar from "./src/components/TopBar";
import NeuContainer from "@/components/NeuContainer";
import Constructing from "@/components/Constructing";
import NeuTest from "./src/components/NeuTest";
import { BlogList } from "@/components/Blog/BlogList";
import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
import { selectTheme } from "@/redux/theme/themeSlice";
import { useSelector } from "react-redux";
import { calcFontColor, useTheme } from "@/hooks/global";
import ErrorPage from "@/components/ErrorPage";
import Index from "@/page/Index";
import LandingPage from "@/page/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "blog/list",
        element: <BlogList />,
      },
      {
        path: "blog/detail/:id",
        element: <Blog />,
      },
      {
        path: "neu/test",
        element: <NeuTest />,
      },
    ],
  },
]);

function App() {
  const themeColor = useSelector(selectTheme);
  return (
    <div
      className={style.basic}
      style={{ background: themeColor, color: calcFontColor(themeColor) }}
    >
      <RouterProvider router={router} />
      <div className={style.foot}>备案号: 浙ICP备2023006378号</div>
    </div>
  );
}

export default App;
