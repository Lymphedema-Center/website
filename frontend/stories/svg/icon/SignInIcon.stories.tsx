import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import SignInIcon from "../../../components/svg/icon/SignInIcon";

export default {
  title: "svg/icon/SignInIcon",
  parameters: {
    componentSubtitle: "A sign in icon."
  },
  component: SignInIcon,
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
  return <SignInIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <SignInIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <SignInIcon size="100px" color="red" />;
