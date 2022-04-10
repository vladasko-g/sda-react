import React from "react";

import { Container } from "./Container";

export const FullHeightContainer = ({ children, ...rest }) => {
  const style = {
    border: "1px solid transparent",
    minHeight: "100vh",
  };

  return (
    <Container {...rest} style={style}>
      {children}
    </Container>
  );
};
