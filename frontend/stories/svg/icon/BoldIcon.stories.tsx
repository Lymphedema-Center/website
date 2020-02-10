import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import BoldIcon from "../../../components/svg/icon/BoldIcon";

export default {
  title: "svg/icon/BoldIcon",
  parameters: {
    componentSubtitle: "An icon to denote bold font weight."
  },
  component: BoldIcon,
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
  return <BoldIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <BoldIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <BoldIcon size="100px" color="red" />;
