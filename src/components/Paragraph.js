import React, { useContext } from "react";

import { ThemeContext } from "../themes";

export const Paragraph = props => {
  const { theme } = useContext(ThemeContext);

  const style = {
    color: theme.text,
  };

  return <p style={style}>{props.children}</p>;
};
