import React, { CSSProperties } from "react";
import Theme from "../Theme";

import style from "./index.module.scss";
import NeuContainer from "../NeuContainer";
import { Link } from "react-router-dom";

// 左侧 图标加名称
// 右侧 导航栏
const Navbar = () => {
  return (
    <NeuContainer type="protuberant" className={style["navbar-container"]}>
      <div className={style["icon"]}>FELINE</div>
      <div className={style.navbar}>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 1 } as CSSProperties}
        >
          <Link to={"/"}>主页</Link>
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 2 } as CSSProperties}
        >
          <Link to={`blog/list`}>博文</Link>
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 3 } as CSSProperties}
        >
          <Link to={`timeline`}>时间线</Link>
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 4 } as CSSProperties}
        >
          <Link to={`timeline`}>分类</Link>
        </NeuContainer>
        <Theme />
      </div>
    </NeuContainer>
  );
};

export default Navbar;
