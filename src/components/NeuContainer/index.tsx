import React, { CSSProperties, ReactNode } from "react";

import classNames from "classnames";

import "./index.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/theme/themeSlice";
import { calcFontColor, calcShadowColor, useTheme } from "@/hooks/global";

export type neuType = "sunken" | "common" | "protuberant" | undefined;

export type surface = "convex" | "flat" | "concave" | undefined;

export type neuSize = "small" | "middle" | "large" | undefined;

export type neuIlluminationAngle = "lf" | "rt" | "lb" | "rb";

interface Props {
  // 额外的 className
  className?: string;
  // 子组件
  children?: ReactNode;
  // 额外的 style 内联样式
  style?: CSSProperties;
  // 大小
  size?: neuSize;
  // 容器初始状态 sunken common" | "protuberant
  type?: neuType;
  // 悬浮时状态
  hover?: neuType;
  // 点击时状态
  active?: neuType;
  // 点击事件
  onClick?: () => void;
  // 边框圆角半径
  radius?: number;
  // 光照亮度 1 - 100
  intensity?: number;
  // 光照角度
  illuminationAngle?: neuIlluminationAngle;
  // 视觉高度
  visualHeight?: number;
  // 切换时是否加载动画 默认 false
  animation?: boolean;
  // 动画切换延迟时间 不传则为 0 - 0.5s 之间的随机时间
  animationDelay?: number;
  // onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>): void => {};
}

const NeuContainer = ({
  children,
  className,
  style,
  radius,
  intensity = 50,
  illuminationAngle,
  visualHeight = 8,
  animation,
  animationDelay,
  onClick,
  active = undefined,
  type = "common",
  hover = undefined,
}: Props) => {
  const themeColor = useSelector(selectTheme);

  console.log(
    "calcShadowColor(themeColor, intensity / 100)",
    calcShadowColor(themeColor, intensity / 100)
  );
  let neuClass = classNames("basic", type, active, hover, className);
  let neuStyle = {
    "--baseColor": themeColor,
    "--textColor": calcFontColor(themeColor),
    "--textColorOpposite": themeColor,
    "--positionX": visualHeight + "px",
    "--positionXOpposite": visualHeight * -1 + "px",
    "--positionY": visualHeight + "px",
    "--positionYOpposite": visualHeight * -1 + "px",
    "--blur": visualHeight * 2 + "px",
    "--radius": radius,
    "--dark": calcShadowColor(themeColor, (intensity / 100) * -1),
    "--light": calcShadowColor(themeColor, intensity / 100),
    "--i": animationDelay || Math.random(),
    // transition: "all 0.309s ease-in-out",
    // "transition-delay": `${animationDelay || Math.random() * 0.5}s`,
    ...style,
  } as CSSProperties;
  return (
    <div
      className={`basic ${type} ${hover ? "hover-" + hover : ""} ${
        active ? "active-" + active : ""
      } ${className ? className : ""}`}
      style={neuStyle}
      onClick={onClick}
    >
      {children}
    </div>
    // <div
    //   className={`basic ${type} ${hover ? "hover-" + hover : ""} ${
    //     active ? "active-" + active : ""
    //   } ${className ? className : ""} ${!theme && useTheme(theme)}`}
    //   datatype={useTheme(theme) + type}
    //   style={
    //     {
    //       ...style,
    //       "--i": Math.random(),
    //     } as CSSProperties
    //   }
    //   onClick={onClick}
    // >
    //   {children}
    // </div>
  );
};

export default NeuContainer;
