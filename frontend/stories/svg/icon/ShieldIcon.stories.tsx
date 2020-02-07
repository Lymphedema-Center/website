import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import ShieldIcon from "../../../components/svg/icon/ShieldIcon";

export default {
  title: "svg/icon/ShieldIcon",
  parameters: {
    componentSubtitle: "A shield icon."
  },
  component: ShieldIcon,
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
  return <ShieldIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <ShieldIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <ShieldIcon size="100px" color="red" />;
