import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { changeTheme, selectTheme } from "@/redux/theme/themeSlice";

import style from "./index.module.scss";
import NeuContainer from "../NeuContainer";
import { useTheme } from "@/hooks/global";

const Theme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <NeuContainer
      type="protuberant"
      active="common"
      className={style["theme-button"]}
      onClick={() => {
        dispatch(changeTheme());
      }}
    >
      <div className={`${style.theme} ${style[useTheme(theme)]} `}>
        <i className="fa-solid fa-sun"></i>
        <i className="fa-solid fa-moon"></i>
      </div>
    </NeuContainer>
  );
};

export default Theme;
