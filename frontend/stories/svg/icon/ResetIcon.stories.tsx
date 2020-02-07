import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import ResetIcon from "../../../components/svg/icon/ResetIcon";

export default {
  title: "svg/icon/ResetIcon",
  parameters: {
    componentSubtitle: "A reset icon."
  },
  component: ResetIcon,
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
  return <ResetIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <ResetIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <ResetIcon size="100px" color="red" />;
