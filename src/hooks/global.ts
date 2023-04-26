import React from "react";

export const useTheme = (theme: boolean | string) => {
  if (typeof theme === "boolean") {
    return theme ? "dark" : "light";
  }
};

// 根据主题颜色来确定阴影颜色
export const calcShadowColor = (hex: string, lum: number) => {
  hex = String(hex).replace(/^0-9a-f/gi, "");

  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  lum = lum || 0;
  let rgb = "#",
    c;
  for (let i = 0; i < hex.length; i++) {
    c = parseInt(hex.substring(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += c;
  }
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
