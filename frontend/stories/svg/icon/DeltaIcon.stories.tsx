import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import DeltaIcon from "../../../components/svg/icon/DeltaIcon";

export default {
  title: "svg/icon/DeltaIcon",
  parameters: {
    componentSubtitle: "A delta icon."
  },
  component: DeltaIcon,
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
  return <DeltaIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <DeltaIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <DeltaIcon size="100px" color="red" />;
