import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { changeTheme, selectTheme } from "@/redux/theme/themeSlice";

import style from "./index.module.scss";
import NeuContainer from "../NeuContainer";
import { useTheme } from "@/hooks/global";

// const DEFAULT_DARK_COLOR = "#153C46";
const DEFAULT_DARK_COLOR = "#2C2F3B";
const DEFAULT_LIGHT_COLOR = "#f9f7f0";

const Theme = () => {
  const [light, setLight] = useState(false);
  const dispatch = useDispatch();

  return (
    <NeuContainer
      visualHeight={7}
      intensity={50}
      type="protuberant"
      active="common"
      className={style["theme-button"]}
      onClick={() => {
        setLight(!light);
        dispatch(changeTheme(light ? DEFAULT_LIGHT_COLOR : DEFAULT_DARK_COLOR));
      }}
    >
      <div className={`${style.theme} ${style[useTheme(light)]}`}>
        <i className="fa-solid fa-sun"></i>
        <i className="fa-solid fa-moon"></i>
      </div>
    </NeuContainer>
  );
};

export default Theme;
