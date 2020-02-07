import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, radios } from "@storybook/addon-knobs";
import LymphedemaCenter from "../../../components/svg/brand/LymphedemaCenterLogo";

export default {
  title: "svg/brand/LymphedemaCenterLogo",
  parameters: {
    componentSubtitle: "The logo for lymphedema-center.com"
  },
  component: LymphedemaCenter,
  decorators: [withA11y, withKnobs]
};

// knobs
const numberOptions = {
  range: true,
  min: 10,
  max: 200,
  step: 10
};
const radioOptions = {
  height: "HEIGHT",
  width: "WIDTH"
};

export const normal = () => {
  // set up knobs
  const height = number("Height (px)", 100, numberOptions, "Normal-Knobs");
  const width = number("Width (px)", 100, numberOptions, "Normal-Knobs");
  const computeFrom = radios(
    "Compute size from:",
    radioOptions,
    "HEIGHT",
    "Normal-Knobs"
  );

  // get the used props
  const usedProps =
    computeFrom === "HEIGHT"
      ? { height: height + "px" }
      : { width: width + "px" };

  // display the logo
  return <LymphedemaCenter {...usedProps} />;
};
export const WidthFromPercent = () => <LymphedemaCenter width="50%" />;
export const HeightFromPixels = () => <LymphedemaCenter height="100px" />;
