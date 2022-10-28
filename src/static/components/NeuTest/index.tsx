import React from "react";

import imgUrl from "../../assets/avatar.jpg";

import "./index.css";

const NeuTest = ({}) => {
  return (
    <div className="test-container">
      <div className="sunken-container standardSize"></div>
      <div className="sunken-surface-container standardSize"></div>
      <div className="flat-surface-container standardSize"></div>
      <div className="protuberant-surface-container standardSize"></div>
      <div className="animate1 standardSize">
        <div className="container">
          <img src={imgUrl} className="img" />
        </div>
      </div>
      <div className="animate2 standardSize"></div>
    </div>
  );
};

export default NeuTest;
