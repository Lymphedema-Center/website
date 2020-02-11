import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, radios } from "@storybook/addon-knobs";
import LymphaticSystem from "../../../components/svg/graphic/LymphaticSystem";

export default {
  title: "svg/graphic/LymphaticSystem",
  parameters: {
    componentSubtitle: "A grpahic representing a damaged lymphatic system."
  },
  component: LymphaticSystem,
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
  return <LymphaticSystem {...usedProps} />;
};
export const HeightFromPixels = () => <LymphaticSystem height="100px" />;
