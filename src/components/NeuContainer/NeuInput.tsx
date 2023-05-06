import React, {
  CSSProperties,
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useMemo,
} from "react";

import styles from "./index.module.scss";
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
  // 额外的 className
  className?: string;
  // 子组件
  children?: ReactNode;
  // 值
  value?: any;
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
  onClick?: MouseEventHandler<HTMLInputElement>;
  // 更改事件
  onChange?: (value: any, e?: ChangeEvent) => void;
  // 指定宽度
  width?: number;
  // 边框圆角半径
  radius?: number;
  // 边框样式
  border?: string;
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
  // Input 的类型
  inputType?: HTMLInputTypeAttribute;
  // Input 前缀
  before?: ReactNode;
  // Input 后缀
  after?: ReactNode;
}

const NeuInput = ({
  children,
  className,
  value,
  style,
  radius = 4,
  width = 200,
  intensity = 50,
  illuminationAngle,
  visualHeight = 2,
  animation,
  animationDelay,
  onClick,
  onChange,
  inputType,
  border = "none",
  size = "normal",
  active = undefined,
  type = "common",
  hover = undefined,
  before,
  after,
}: NeuProps) => {
  const themeColor = useSelector(selectTheme);

  return (
    <div
      className={`${styles["basic"]} ${styles["neu-input-container"]} ${styles["sunken"]} ${className}`}
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
          width,
        },
        themeColor,
        "input"
      )}
    >
      {before && <div className={styles["neu-input-before"]}>{before}</div>}
      <input
        className={styles["neu-input"]}
        type={inputType}
        onClick={onClick}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {after && <div className={styles["neu-input-before"]}>{after}</div>}
    </div>
  );
};

export default NeuInput;
