import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
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
  return <Header hamburgerOnClick={action("button-click")} />;
};
