import React, { memo } from "react";

import { ListItem } from "./ListItem";

export const List = memo(({ items }) => {
  console.log("List rendered");

  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id}>{item.text}</ListItem>
      ))}
    </ul>
  );
});
