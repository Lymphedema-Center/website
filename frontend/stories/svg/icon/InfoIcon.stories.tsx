import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import InfoIcon from "../../../components/svg/icon/InfoIcon";

export default {
  title: "svg/icon/InfoIcon",
  parameters: {
    componentSubtitle: "An icon representing an info message."
  },
  component: InfoIcon,
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
  return <InfoIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <InfoIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <InfoIcon size="100px" color="red" />;
