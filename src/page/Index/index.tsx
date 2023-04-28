import React, { useState } from "react";
import style from "./index.module.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import NeuContainer from "@/components/NeuContainer";
import Constructing from "@/components/Constructing";
import NeuTest from "@/components/NeuTest";
import { BlogList } from "@/components/Blog/BlogList";
import Blog from "@/components/Blog";
import LandingPage from "@/page/LandingPage";
import Navbar from "@/components/Navbar";
import { selectTheme } from "@/redux/theme/themeSlice";
import { useSelector } from "react-redux";
import { calcFontColor, useTheme } from "@/hooks/global";
import ErrorPage from "@/components/ErrorPage";

function Index() {
  const themeColor = useSelector(selectTheme);
  return (
    <div
      className={style.basic}
      style={{ background: themeColor, color: calcFontColor(themeColor) }}
    >
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
            <Outlet />
          </NeuContainer>
        </div>
      </div>
      <div className={style.foot}>备案号: 浙ICP备2023006378号</div>
    </div>
  );
}

export default Index;
