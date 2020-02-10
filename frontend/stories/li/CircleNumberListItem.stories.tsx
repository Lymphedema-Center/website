import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import CircleNumberListItem from "../../components/li/CircleNumberListItem";

export default {
  title: "li/CircleNumberListItem",
  parameters: {
    componentSubtitle: "A decorated ordered list item element."
  },
  component: CircleNumberListItem,
  decorators: [withA11y]
};

export const normal = () => {
  return <CircleNumberListItem index={1} message={"Symptoms Guide"} />;
};
