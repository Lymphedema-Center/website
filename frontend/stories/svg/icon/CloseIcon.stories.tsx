import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import CloseIcon from "../../../components/svg/icon/CloseIcon";

export default {
  title: "svg/icon/CloseIcon",
  parameters: {
    componentSubtitle: "A close icon."
  },
  component: CloseIcon,
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
  return <CloseIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <CloseIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <CloseIcon size="100px" color="red" />;
