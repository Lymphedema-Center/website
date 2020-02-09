import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import Footer from "../../components/composed/Footer";

export default {
  title: "composed/Footer",
  parameters: {
    componentSubtitle: "The app footer."
  },
  component: Footer,
  decorators: [withA11y]
};

export const normal = () => {
  return <Footer />;
};
