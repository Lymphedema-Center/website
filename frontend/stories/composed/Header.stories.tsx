import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import Header from "../../components/composed/Header";

export default {
  title: "composed/Header",
  parameters: {
    componentSubtitle: "The app header."
  },
  component: Header,
  decorators: [withA11y]
};

export const normal = () => {
  return <Header hamburgerOnClick={() => {}} />;
};
