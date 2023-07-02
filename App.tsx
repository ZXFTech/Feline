import React, { useState } from "react";
import style from "./App.module.scss";

import { RouterProvider } from "react-router-dom";

import { selectTheme } from "@/redux/theme/themeSlice";
import { useSelector } from "react-redux";
import { calcFontColor, useTheme } from "@/utils/global";

import { router } from "@/router";

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
