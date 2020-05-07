import React from "react";
import styled from "styled-components";
import { withA11y } from "@storybook/addon-a11y";
import Drawer from "../../components/overlay/drawer/Drawer";

export default {
  title: "composed/Drawer",
  parameters: {
    componentSubtitle: "The app drawer.",
  },
  component: Drawer,
  decorators: [withA11y],
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const normal = () => {
  return (
    <Container>
      <Drawer />
    </Container>
  );
};
