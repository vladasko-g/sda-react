import React from "react";

export const THEMES = {
  dark: "dark",
  light: "light",
};

export const themes = {
  [THEMES.dark]: {
    text: "#eee",
    background: "#333",
  },
  [THEMES.light]: {
    text: "#333",
    background: "#eee",
  },
};

const defaultThemeContext = {
  theme: themes[THEMES.light],
  toggleTheme: () => null,
};

export const ThemeContext = React.createContext(defaultThemeContext);
