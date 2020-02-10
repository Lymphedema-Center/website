import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import H1 from "../../components/text/H1";

export default {
  title: "text/H1",
  parameters: {
    componentSubtitle: "The logo for lymphedema-center.com"
  },
  component: H1,
  decorators: [withA11y]
};

export const normal = () => {
  return <H1>This is some sample text.</H1>;
};
