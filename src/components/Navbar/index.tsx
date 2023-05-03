import React, { CSSProperties } from "react";
import Theme from "../Theme";

import style from "./index.module.scss";
import NeuContainer from "../NeuContainer";
import { Link, useNavigate } from "react-router-dom";

// 左侧 图标加名称
// 右侧 导航栏
const Navbar = () => {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };
  return (
    <NeuContainer type="protuberant" className={style["navbar-container"]}>
      <div className={style["icon"]}>FELINE</div>
      <div className={style.navbar}>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 1 } as CSSProperties}
          onClick={() => {
            goTo("/");
          }}
        >
          主页
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 2 } as CSSProperties}
          onClick={() => {
            goTo("blog/list");
          }}
        >
          博文
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 3 } as CSSProperties}
          onClick={() => {
            goTo("timeline");
          }}
        >
          时间线
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 4 } as CSSProperties}
          onClick={() => {
            goTo("category");
          }}
        >
          分类
        </NeuContainer>
        <Theme />
      </div>
    </NeuContainer>
  );
};

export default Navbar;
