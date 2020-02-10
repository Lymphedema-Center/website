import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import H2 from "../../components/text/H2";

export default {
  title: "text/H2",
  parameters: {
    componentSubtitle: "The logo for lymphedema-center.com"
  },
  component: H2,
  decorators: [withA11y]
};

export const normal = () => {
  return <H2>This is some sample text.</H2>;
};
