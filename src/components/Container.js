import React, { useContext } from "react";

import { ThemeContext } from "../themes";

export const Container = ({ children, ...rest }) => {
  const { theme } = useContext(ThemeContext);

  const style = {
    color: theme.text,
    background: theme.background,
    padding: 20,
    ...(rest.style && rest.style),
  };

  return (
    <div {...rest} style={style}>
      {children}
    </div>
  );
};
