import React, { useContext } from "react";

import { ThemeContext } from "../themes";

export const Button = props => {
  const { theme } = useContext(ThemeContext);

  const style = {
    color: theme.background,
    background: theme.text,
    border: `1px solid ${theme.background}`,
    borderRadius: 15,
    padding: "10px 20px",
    cursor: "pointer",
  };

  return (
    <button {...props} style={style}>
      {props.children}
    </button>
  );
};
