import React from "react";
import styled from "styled-components";
import { withA11y } from "@storybook/addon-a11y";
import MWC from "../../components/layout/MWC";

export default {
  title: "layout/MWC",
  parameters: {
    componentSubtitle: "A maximum width container."
  },
  component: MWC,
  decorators: [withA11y]
};

const Content = styled.div`
  background-color: palevioletred;
  height: 200px;
`;

export const normal = () => {
  return (
    <MWC>
      <Content />
    </MWC>
  );
};
