import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import WaveTransition from "../../components/decoration/WaveTransition";

export default {
  title: "decoration/WaveTransition",
  parameters: {
    componentSubtitle: "A maximum width container."
  },
  component: WaveTransition,
  decorators: [withA11y]
};

export const normal = () => {
  return <WaveTransition url="/background/green-transition.png" />;
};
