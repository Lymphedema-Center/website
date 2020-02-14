import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import BulletListItem from "../../components/li/BulletListItem";

export default {
  title: "li/BulletListItem",
  parameters: {
    componentSubtitle: "A decorated unordered list item element."
  },
  component: BulletListItem,
  decorators: [withA11y]
};

export const normal = () => {
  return <BulletListItem message="Radiation treatment" />;
};
