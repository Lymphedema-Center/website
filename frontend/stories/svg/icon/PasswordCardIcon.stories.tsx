import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import PasswordCardIcon from "../../../components/svg/icon/PasswordCardIcon";

export default {
  title: "svg/icon/PasswordCardIcon",
  parameters: {
    componentSubtitle: "A password card icon."
  },
  component: PasswordCardIcon,
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
  return <PasswordCardIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => (
  <PasswordCardIcon size="25%" color="blue" />
);
export const SizeWithPixels = () => (
  <PasswordCardIcon size="100px" color="red" />
);
