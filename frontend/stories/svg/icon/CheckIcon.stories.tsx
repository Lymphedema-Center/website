import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import CheckIcon from "../../../components/svg/icon/CheckIcon";

export default {
  title: "svg/icon/CheckIcon",
  parameters: {
    componentSubtitle: "A check icon."
  },
  component: CheckIcon,
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
  return <CheckIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <CheckIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <CheckIcon size="100px" color="red" />;
