import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import NextIcon from "../../../components/svg/icon/NextIcon";

export default {
  title: "svg/icon/NextIcon",
  parameters: {
    componentSubtitle: "An icon for a next button."
  },
  component: NextIcon,
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
  return <NextIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <NextIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <NextIcon size="100px" color="red" />;
