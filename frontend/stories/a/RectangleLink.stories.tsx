import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import RectangleLink from "../../components/a/RectangleLink";

export default {
  title: "a/RectangleLink",
  parameters: {
    componentSubtitle: "A rectangle link."
  },
  component: RectangleLink,
  decorators: [withA11y]
};

export const normal = () => {
  return <RectangleLink>View the Symptoms Guide</RectangleLink>;
};
