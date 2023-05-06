import React, {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  useMemo,
} from "react";

import classNames from "classnames";

import "./index.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/theme/themeSlice";
import {
  calcFontColor,
  calcShadowColor,
  generateStyle,
  useTheme,
} from "@/hooks/global";

export type neuType = "sunken" | "common" | "protuberant" | undefined;

export type surface = "convex" | "flat" | "concave" | undefined;

export type neuSize = "small" | "normal" | "large" | undefined;

export type neuIlluminationAngle = "lf" | "rt" | "lb" | "rb";

export type containerType = "normal" | "button" | "text" | "input";

export interface NeuProps {
  // id
  id?: string;
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
  onClick?: MouseEventHandler<HTMLElement>;
  // 边框圆角半径
  radius?: number;
  // 边框样式
  border?: string | boolean;
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
  // 容器类型
  containerType?: containerType;
}

const NeuContainer = ({
  id,
  children,
  className,
  style,
  radius,
  intensity = 50,
  illuminationAngle,
  visualHeight = 10,
  animation,
  animationDelay,
  onClick,
  border = false,
  size = "normal",
  active = undefined,
  type = "common",
  hover = undefined,
  containerType = "normal",
}: NeuProps) => {
  const themeColor = useSelector(selectTheme);

  let neuClass = classNames("basic", type, active, hover, className);

  return (
    <div
      id={id}
      className={`basic ${type} ${hover ? "hover-" + hover : ""} ${
        active ? "active-" + active : ""
      } ${className ? className : ""}`}
      style={generateStyle(
        {
          children,
          className,
          style,
          radius,
          intensity,
          illuminationAngle,
          visualHeight,
          animation,
          animationDelay,
          onClick,
          border,
          size,
          active,
          type,
          hover,
          containerType,
        },
        themeColor
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default NeuContainer;
