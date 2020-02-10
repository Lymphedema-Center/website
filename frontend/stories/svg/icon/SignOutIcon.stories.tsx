import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import SignOutIcon from "../../../components/svg/icon/SignOutIcon";

export default {
  title: "svg/icon/SignOutIcon",
  parameters: {
    componentSubtitle: "A sign out icon."
  },
  component: SignOutIcon,
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
  return <SignOutIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <SignOutIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <SignOutIcon size="100px" color="red" />;
