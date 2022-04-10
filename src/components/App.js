import React, { useState } from "react";

import { ThemeContext, themes, THEMES } from "../themes";

import { Page } from "./Page";

export const App = () => {
  const [activeTheme, setActiveTheme] = useState(THEMES.light);

  const toggleTheme = () => {
    setActiveTheme(activeTheme => {
      const newActiveTheme =
        activeTheme === THEMES.light ? THEMES.dark : THEMES.light;

      return newActiveTheme;
    });
  };

  const themeContextValue = {
    theme: themes[activeTheme],
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <Page />
    </ThemeContext.Provider>
  );
};
