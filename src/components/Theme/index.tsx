import React, { useState } from "react";

import style from "./index.module.scss";
import NeuContainer from "../NeuContainer";

const Theme = () => {
  const [theme, setTheme] = useState(true);
  return (
    <NeuContainer
      type="protuberant"
      active="common"
      className={style["theme-button"]}
      onClick={() => {
        setTheme(!theme);
      }}
    >
      <div className={`${style.theme} ${theme ? style.light : style.dark}`}>
        <i className="fa-solid fa-sun"></i>
        <i className="fa-solid fa-moon"></i>
      </div>
    </NeuContainer>
  );
};

export default Theme;
