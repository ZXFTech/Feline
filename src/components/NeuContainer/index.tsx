import React, { CSSProperties, ReactNode } from "react";

import "./index.css";

export type neuType = "sunken" | "common" | "protuberant" | undefined;

export type surface = "convex" | "flat" | "concave" | undefined;

export type neuSize = "small" | "middle" | "large" | undefined;

interface Props {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  type?: neuType;
  hover?: neuType;
  size?: neuSize;
}

const NeuContainer = ({
  children,
  className,
  style,
  type = "common",
  hover = undefined,
}: Props) => {
  return (
    <div
      className={`${type} ${hover ? "hover-" + hover : ""} ${
        className ? className : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default NeuContainer;
