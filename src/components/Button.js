import React from "react";

export const Button = ({ children, name, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
