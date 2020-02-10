import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import UnderlineTitle from "../../components/decoration/UnderlineTitle";

export default {
  title: "decoration/UnderlineTitle",
  parameters: {
    componentSubtitle: "A maximum width container."
  },
  component: UnderlineTitle,
  decorators: [withA11y]
};

export const normal = () => {
  return <UnderlineTitle message="Lymphedema" color="#E0EEEA" />;
};
