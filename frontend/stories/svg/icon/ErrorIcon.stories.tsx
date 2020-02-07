import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import ErrorIcon from "../../../components/svg/icon/ErrorIcon";

export default {
  title: "svg/icon/ErrorIcon",
  parameters: {
    componentSubtitle: "An error icon."
  },
  component: ErrorIcon,
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
  return <ErrorIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <ErrorIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <ErrorIcon size="100px" color="red" />;
