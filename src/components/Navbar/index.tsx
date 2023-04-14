import React, { CSSProperties } from "react";
import Theme from "../Theme";

import style from "./index.module.scss";
import NeuContainer from "../NeuContainer";

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
          主页
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 2 } as CSSProperties}
        >
          博文
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 3 } as CSSProperties}
        >
          时间线
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={style.link}
          style={{ "--i": 4 } as CSSProperties}
        >
          分类
        </NeuContainer>
        <Theme />
      </div>
    </NeuContainer>
  );
};

export default Navbar;
