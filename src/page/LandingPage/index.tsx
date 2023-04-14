import React from "react";

import NeuContainer from "@/components/NeuContainer";

import style from "./index.module.scss";

import avatar from "@/assets/avatar.jpg";
import Theme from "@/components/Theme";
import Typewriter from "@/components/Typewriter";
import Clock from "@/components/Clock";

const content = ["react", "没事跑跑步", "和女朋友黏在一起"];
const LandingPage = () => {
  return (
    <div className={style.container}>
      {/* 个人信息 */}
      <NeuContainer className={style.info}>
        <NeuContainer type="protuberant" className={style.logo}>
          <img src={avatar} alt="my blog avatar"></img>
        </NeuContainer>
        <div className={style.meta}>
          <NeuContainer type="sunken" className={style.name}>
            你好,我是 Feline
            <div className={style.signature}>
              <span>我喜欢</span>
              <Typewriter content={content} />
            </div>
          </NeuContainer>
        </div>
      </NeuContainer>
      <NeuContainer type="protuberant" className={style.clock}>
        <Clock />
      </NeuContainer>
      {/* 生活 */}
      {/* <NeuContainer className={style.life}>
        <NeuContainer className={style.weather}>天气</NeuContainer>
        <NeuContainer className={style.clock}>时间</NeuContainer>
      </NeuContainer> */}
      {/* 导航 */}
      <NeuContainer className={style.navigation}>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          文章
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          分类
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          时间线
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
        <NeuContainer hover="protuberant" className={style["nav-block"]}>
          其他
        </NeuContainer>
      </NeuContainer>
      {/* 联系方式 */}
      <NeuContainer className={style["contact-container"]}>
        <NeuContainer
          hover="protuberant"
          className={`${style.contact} ${style.github}`}
        >
          <i className="fa-brands fa-github"></i>
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={`${style.contact} ${style.weixin}`}
        >
          <i className="fa-brands fa-weixin"></i>
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={`${style.contact} ${style.weibo}`}
        >
          <i className="fa-brands fa-weibo"></i>
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={`${style.contact} ${style.qq}`}
        >
          <i className="fa-brands fa-qq"></i>
        </NeuContainer>
        <NeuContainer
          hover="protuberant"
          className={`${style.contact} ${style.twitter}`}
        >
          <i className="fa-brands fa-twitter"></i>
        </NeuContainer>
      </NeuContainer>
    </div>
  );
};

export default LandingPage;
