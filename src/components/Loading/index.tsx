import React, { ReactNode, useEffect, useState } from "react";
import NeuContainer from "../NeuContainer";

import style from "./index.module.scss";

interface Props {
  visible: boolean;
  children?: ReactNode;
}

const Loading = ({ visible, children }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(visible);
    }, 100);
  }, [visible]);

  return (
    // <div className="loading-container">
    //   <div className="loading cube-box">
    //     <div className="outer-box">
    //       <NeuContainer className="large-box" type="protuberant">
    //         <NeuContainer className="small-box" type="sunken"></NeuContainer>
    //       </NeuContainer>
    //     </div>
    //   </div>
    // </div>
    <div className={style["loading-container"]}>
      <div
        className={`${style.mask} ${visible ? "" : style["container-hidden"]}`}
      >
        <NeuContainer
          className={`${style["flex-center"]} ${
            show ? style["flex-center-shadow"] : ""
          }`}
          type="protuberant"
        >
          <div
            className={`${style.ring} ${show ? style["ring-shadow"] : ""}`}
          ></div>
          <NeuContainer
            className={`${style["inner-ring"]} ${
              show ? style["inner-ring-shadow"] : ""
            }`}
            type="sunken"
          ></NeuContainer>
        </NeuContainer>
      </div>
      {children}
    </div>
  );
};

export default Loading;
