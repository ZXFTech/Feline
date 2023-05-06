import { NeuProps } from "@/components/NeuContainer";
import React, { CSSProperties } from "react";

export const useTheme = (theme: boolean | string) => {
  if (typeof theme === "boolean") {
    return theme ? "dark" : "light";
  }
};

// 根据主题颜色来确定阴影颜色
export const calcShadowColor = (hex: string, lum: number) => {
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  lum = lum || 0;
  let rgb = "#",
    c;
  for (let i = 0; i < 3; i++) {
    c = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substring(c.length);
  }
  return rgb;
};

// 根据主题颜色来确定字体颜色
export const calcFontColor = (hex: string) => {
  const r = parseInt(hex.substring(1, 3), 16),
    g = parseInt(hex.substring(3, 5), 16),
    b = parseInt(hex.substring(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#001f3f" : "#F6F5F7";
};

// 验证是否符合颜色格式 ^#[0-9a-f]{6}$
export const isValidColor = (hex) => /^#[0-9a-f]{6}$/i.test(hex);

// Hex 转 rgb
export const hexToRgb = (hex: string) => {
  //test方法检查在字符串中是否存在一个模式，如果存在则返回true，否则返回false
  if (!isValidColor(hex)) return console.log("输入错误的hex颜色值");
  //replace替换查找的到的字符串
  hex = hex.replace("#", "");
  //match得到查询数组
  let hxs: any[] = hex.match(/../g);
  for (let i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16);
  return hxs;
};
export const rgbToHex = (r: string, g: string, b: string) => {
  let reg = /^\d{1,3}$/;
  if (!reg.test(r) || !reg.test(g) || !reg.test(b))
    console.log("输入错误的hex颜色值");
  let hex = [
    parseInt(r).toString(16),
    parseInt(g).toString(16),
    parseInt(b).toString(16),
  ];
  for (let i = 0; i < 3; i++) if (hex[i].length == 1) hex[i] = "0" + hex[i];
  return "#" + hex.join("");
};

export const getDarkColor = (color: string, level: number) => {
  let r = /^\#?[0-9A-F]{6}$/;
  if (!isValidColor(color)) return console.log("输入错误的hex颜色值111");
  let rgb = hexToRgb(color);
  //floor 向下取整
  for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));
  const newColor = rgbToHex(rgb[0], rgb[1], rgb[2]);
  return newColor;
};

export const getLightColor = (color: string, level: number) => {
  if (!isValidColor(color)) return alert("输入错误的hex颜色值");
  let rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++)
    rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
};

const buttonSize: {
  small: CSSProperties;
  normal: CSSProperties;
  large: CSSProperties;
} = {
  small: {
    "--buttonFontSize": "12px",
    "--buttonPadding": "8px",
  } as CSSProperties,
  normal: {
    "--buttonFontSize": "15px",
    "--buttonPadding": "8px",
  } as CSSProperties,
  large: {
    "--buttonFontSize": "18px",
    "--buttonPadding": "8px",
    "--buttonLetterSpacing": "1px",
  } as CSSProperties,
};

const inputSize: {
  small: CSSProperties;
  normal: CSSProperties;
  large: CSSProperties;
} = {
  small: {
    "--inputFontSize": "15px",
    "--inputPadding": "2px 4px",
    "--inputPaddingRight": 0,
    "--inputLineHeight": "20px",
  } as CSSProperties,
  normal: {
    "--inputFontSize": "18px",
    "--inputPadding": "2px 4px",
    "--inputPaddingRight": 0,
    "--inputLineHeight": "24px",
  } as CSSProperties,
  large: {
    "--inputFontSize": "21px",
    "--inputPadding": "2px 4px",
    "--inputPaddingRight": 0,
    "--inputLineHeight": "28px",
  } as CSSProperties,
};

export const generateStyle = (
  {
    style,
    size,
    radius,
    intensity,
    visualHeight,
    animation,
    animationDelay,
    border,
  }: NeuProps,
  themeColor: string,
  containerType?: string
) => {
  let neuStyle = {
    "--baseColor": themeColor,
    "--textColor": calcFontColor(themeColor),
    "--textColorOpposite": themeColor,
    "--positionX": visualHeight + "px",
    "--positionXOpposite": visualHeight * -1 + "px",
    "--positionY": visualHeight + "px",
    "--positionYOpposite": visualHeight * -1 + "px",
    "--blur": visualHeight * 2 + "px",
    "--radius": radius && radius + "px",
    "--dark": calcShadowColor(themeColor, (intensity / 100) * -1),
    "--light": calcShadowColor(themeColor, intensity / 100),
    "--deeperColor": getDarkColor(themeColor, 1),
    "--lighterColor": getLightColor(themeColor, 0.4),
    "--neuDelay": animationDelay || Math.random(),
    "--borderStyle":
      typeof border === "string"
        ? border
        : border && "1px solid " + getDarkColor(themeColor, 1),
    // : border && "1px solid " + getDarkColor(themeColor, 0.2),
    ...(animation && { transition: "all 0.309s ease-in-out" }),
    // "transition-delay": `${animationDelay || Math.random() * 0.5}s`,
    ...style,
  } as CSSProperties;

  switch (containerType) {
    case "button":
      return {
        ...neuStyle,
        ...buttonSize[size],
      };
    case "input":
      return {
        ...neuStyle,
        ...inputSize[size],
      };
    default:
      return neuStyle;
  }
};
