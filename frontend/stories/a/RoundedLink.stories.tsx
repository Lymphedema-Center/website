import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import RoundedLink from "../../components/a/RoundedLink";

export default {
  title: "a/RoundedLink",
  parameters: {
    componentSubtitle: "A rounded link."
  },
  component: RoundedLink,
  decorators: [withA11y]
};

export const normal = () => {
  return <RoundedLink>View the Symptoms Guide</RoundedLink>;
};
