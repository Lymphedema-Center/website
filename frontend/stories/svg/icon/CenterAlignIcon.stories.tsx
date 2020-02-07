import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import CenterAlignIcon from "../../../components/svg/icon/CenterAlignIcon";

export default {
  title: "svg/icon/CenterAlignIcon",
  parameters: {
    componentSubtitle: "An icon to denote center aligning text."
  },
  component: CenterAlignIcon,
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
  return <CenterAlignIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => (
  <CenterAlignIcon size="25%" color="blue" />
);
export const SizeWithPixels = () => (
  <CenterAlignIcon size="100px" color="red" />
);
