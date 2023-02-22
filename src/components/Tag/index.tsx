import React, { ReactNode } from "react";
import NeuContainer from "../NeuContainer";

import "./index.css";

interface Props {
  children: ReactNode;
  color?: string;
}

const Tag = ({ children, color }: Props) => {
  return (
    <NeuContainer
      type="common"
      hover="protuberant"
      style={{ color: color, cursor: "pointer" }}
      className="tag"
    >
      <span>{children}</span>
    </NeuContainer>
  );
};

export default Tag;
