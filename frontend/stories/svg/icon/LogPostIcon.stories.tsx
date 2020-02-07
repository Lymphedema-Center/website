import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import LogPostIcon from "../../../components/svg/icon/LogPostIcon";

export default {
  title: "svg/icon/LogPostIcon",
  parameters: {
    componentSubtitle: "A log post icon."
  },
  component: LogPostIcon,
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
  return <LogPostIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <LogPostIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <LogPostIcon size="100px" color="red" />;
