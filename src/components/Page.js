import React from "react";

import { FullHeightContainer } from "./FullHeightContainer";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { Paragraph } from "./Paragraph";

export const Page = () => {
  return (
    <FullHeightContainer>
      <Paragraph>Some text</Paragraph>
      <Paragraph>Some more text</Paragraph>
      <ToggleThemeButton>Toggle theme</ToggleThemeButton>
    </FullHeightContainer>
  );
};
