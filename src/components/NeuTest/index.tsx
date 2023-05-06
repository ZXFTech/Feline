import React, { useState } from "react";

import imgUrl from "../../assets/avatar.jpg";

import NeuContainer from "../NeuContainer";

import style from "./index.module.scss";
import NeuButton from "../NeuContainer/NeuButton";
import NeuInput from "../NeuContainer/NeuInput";
import { Input } from "antd";
import Login from "../Login";

// type 描述整体突起还是塌陷  突起 | 塌陷 | 平坦(默认)
// surface 描述表面突起还是塌陷 突起 | 塌陷 | 平坦(默认)
// hover 鼠标移动到元素时的表现 突起 | 塌陷 | 表面突起 | 表面塌陷 | 无(默认)

const NeuTest = ({}) => {
  const [text, setText] = useState("second");

  const onChange = (value) => {
    console.log("value", value);
  };
  return (
    <div className={style["test-container"]}>
      <NeuButton size="small">按钮测试</NeuButton>
      <NeuInput
        size="small"
        before={"test"}
        inputType="number"
        onChange={onChange}
        after={
          <>
            <NeuButton>
              <i className="fa-solid fa-check"></i>
            </NeuButton>
            <NeuButton>
              <i className="fa-solid fa-xmark"></i>
            </NeuButton>
          </>
        }
      />
      <NeuInput before={"test"} inputType="number" onChange={onChange} />
      <NeuInput
        size="large"
        before={"test"}
        inputType="number"
        onChange={onChange}
        after={
          <>
            <NeuButton>
              <i className="fa-solid fa-check"></i>
            </NeuButton>
            <NeuButton>
              <i className="fa-solid fa-xmark"></i>
            </NeuButton>
          </>
        }
      />
      <Input
        status="warning"
        addonAfter={
          <>
            <NeuButton>
              <i className="fa-solid fa-check"></i>
            </NeuButton>
            <NeuButton>
              <i className="fa-solid fa-xmark"></i>
            </NeuButton>
          </>
        }
      />
      <Login />
      {/* <NeuContainer type="sunken">
        <div>平面塌陷</div>
      </NeuContainer>
      <NeuContainer type="sunken" hover="common">
        <div>平面塌陷</div>
        <div>聚焦平坦</div>
      </NeuContainer>
      <NeuContainer type="sunken" hover="protuberant">
        <div>平面塌陷</div>
        <div>聚焦凸起</div>
      </NeuContainer>

      <NeuContainer type="common" hover="sunken">
        <div>平面平坦</div>
        <div>聚焦塌陷</div>
      </NeuContainer>
      <NeuContainer type="common">
        <div>平面平坦</div>
        <div>聚焦平坦</div>
      </NeuContainer>
      <NeuContainer type="common" hover="protuberant">
        <div>平面平坦</div>
        <div>聚焦凸起</div>
      </NeuContainer>

      <NeuContainer type="protuberant" hover="sunken">
        <div>平面突起</div>
        <div>聚焦塌陷</div>
      </NeuContainer>
      <NeuContainer
        type="protuberant"
        hover="common"
        intensity={50}
        visualHeight={10}
        animation
      >
        <div>平面突起</div>
        <div>聚焦平坦</div>
      </NeuContainer>
      <NeuContainer type="protuberant">
        <div>平面突起</div>
        <div>聚焦凸起</div>
      </NeuContainer> */}
    </div>
  );
};

export default NeuTest;
