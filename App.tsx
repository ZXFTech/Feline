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
import Edit from "@/components/Blog/Edit";
import Login from "@/components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
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
        path: "blog/edit/:id",
        element: <Edit />,
      },
      {
        path: "blog/new",
        element: <Edit />,
      },
      {
        path: "neu/test",
        element: <NeuTest />,
      },
      {
        path: "login",
        element: <Login />,
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
    </div>
  );
}

export default App;
