import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import SuccessIcon from "../../../components/svg/icon/SuccessIcon";

export default {
  title: "svg/icon/SuccessIcon",
  parameters: {
    componentSubtitle: "A success icon."
  },
  component: SuccessIcon,
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
  return <SuccessIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <SuccessIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <SuccessIcon size="100px" color="red" />;
