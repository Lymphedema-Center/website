import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import HamburgerIcon from "../../../components/svg/icon/HamburgerIcon";

export default {
  title: "svg/icon/HamburgerIcon",
  parameters: {
    componentSubtitle: "A hamburger stack icon."
  },
  component: HamburgerIcon,
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
  return <HamburgerIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <HamburgerIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <HamburgerIcon size="100px" color="red" />;
