import React, { memo } from "react";

export const Button = memo(({ children, name, ...rest }) => {
  console.log(`Button ${name} rendered`);

  return <button {...rest}>{children}</button>;
});
