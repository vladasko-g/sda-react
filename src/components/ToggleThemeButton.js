import React, { useContext } from "react";

import { ThemeContext } from "../themes";

import { Button } from "./Button";

export const ToggleThemeButton = props => {
  const { toggleTheme } = useContext(ThemeContext);

  return <Button onClick={toggleTheme} {...props} />;
};
