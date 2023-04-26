import React from "react";

export const useTheme = (theme: boolean | string) => {
  if (typeof theme === "boolean") {
    return theme ? "dark" : "light";
  }
};
