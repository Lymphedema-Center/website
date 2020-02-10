import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import PreviousIcon from "../../../components/svg/icon/PreviousIcon";

export default {
  title: "svg/icon/PreviousIcon",
  parameters: {
    componentSubtitle: "An icon for a previous button."
  },
  component: PreviousIcon,
  decorators: [withA11y, withKnobs]
};

// knobs
const numberOptions = {
  range: true,
  min: 10,
  max: 200,
  step: 10
};

export const normal = () => {
  const size = number("Size (px)", 100, numberOptions, "Normal-Knobs");
  const fill = color("Color", "#434343", "Normal-Knobs");
  return <PreviousIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <PreviousIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <PreviousIcon size="100px" color="red" />;
