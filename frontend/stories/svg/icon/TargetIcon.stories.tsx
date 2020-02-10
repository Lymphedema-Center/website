import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import TargetIcon from "../../../components/svg/icon/TargetIcon";

export default {
  title: "svg/icon/TargetIcon",
  parameters: {
    componentSubtitle: "A target icon."
  },
  component: TargetIcon,
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
  return <TargetIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <TargetIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <TargetIcon size="100px" color="red" />;
