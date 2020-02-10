import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import SignUpIcon from "../../../components/svg/icon/SignUpIcon";

export default {
  title: "svg/icon/SignUpIcon",
  parameters: {
    componentSubtitle: "A sign up icon."
  },
  component: SignUpIcon,
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
  return <SignUpIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <SignUpIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <SignUpIcon size="100px" color="red" />;
