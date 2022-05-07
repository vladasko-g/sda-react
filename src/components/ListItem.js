import React from "react";

export const ListItem = ({ children }) => {
  console.log("ListItem rendered");

  return <li>{children}</li>;
};
