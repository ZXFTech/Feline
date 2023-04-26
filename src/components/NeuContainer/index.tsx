import React, { CSSProperties, ReactNode } from "react";

import "./index.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/theme/themeSlice";
import { useTheme } from "@/hooks/global";

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
  active?: neuType;
  onClick?: () => void;
  // onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>): void => {};
}

const NeuContainer = ({
  children,
  className,
  style,
  onClick,
  active = undefined,
  type = "common",
  hover = undefined,
}: Props) => {
  const theme = useSelector(selectTheme);
  return (
    <div
      className={`basic ${type} ${hover ? "hover-" + hover : ""} ${
        active ? "active-" + active : ""
      } ${className ? className : ""} ${!theme && useTheme(theme)}`}
      datatype={useTheme(theme) + type}
      style={
        {
          ...style,
          "--i": Math.random(),
        } as CSSProperties
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default NeuContainer;
