import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import EllipsisIcon from "../../../components/svg/icon/EllipsisIcon";

export default {
  title: "svg/icon/EllipsisIcon",
  parameters: {
    componentSubtitle: "An ellipsis icon."
  },
  component: EllipsisIcon,
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
  return <EllipsisIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <EllipsisIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <EllipsisIcon size="100px" color="red" />;
