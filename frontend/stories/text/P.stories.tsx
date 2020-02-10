import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import P from "../../components/text/P";

export default {
  title: "text/P",
  parameters: {
    componentSubtitle: "The logo for lymphedema-center.com"
  },
  component: P,
  decorators: [withA11y]
};

export const normal = () => {
  return <P>This is some sample text.</P>;
};
