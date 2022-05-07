import React from "react";

export const Button = ({ children, name, ...rest }) => {
  console.log(`Button ${name} rendered`);

  return <button {...rest}>{children}</button>;
};
