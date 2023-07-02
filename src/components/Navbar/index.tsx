import React, { CSSProperties } from "react";
import Theme from "../Theme";

import style from "./index.module.scss";
import NeuContainer from "../NeuContainer";
import { Link, useNavigate } from "react-router-dom";
import NeuButton from "../NeuContainer/NeuButton";
import { getCache } from "@/utils/browser";
import { USERINFO } from "@/utils/variebles";
import UserInfo from "../UserInfo.tsx";
import Avatar from "../Avatar";

// 左侧 图标加名称
// 右侧 导航栏
const Navbar = () => {
  const user = getCache(USERINFO);
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };
  return (
    <div className={style["navbar-container"]}>
      <NeuContainer
        type="protuberant"
        visualHeight={5}
        className={style["icon"]}
      >
        <div>FELINE</div>
      </NeuContainer>
      <div className={style["functional-part"]}>
        {/* <Avatar userInfo={user} /> */}
        <Theme />
      </div>
      <NeuContainer
        visualHeight={5}
        type="protuberant"
        className={style.navbar}
      >
        <NeuContainer
          visualHeight={5}
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
          visualHeight={5}
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
          visualHeight={5}
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
          visualHeight={5}
          hover="protuberant"
          className={style.link}
          style={{ "--i": 4 } as CSSProperties}
          onClick={() => {
            goTo("category");
          }}
        >
          分类
        </NeuContainer>
      </NeuContainer>
    </div>
  );
};

export default Navbar;
