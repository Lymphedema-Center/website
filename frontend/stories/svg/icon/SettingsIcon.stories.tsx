import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import SettingsIcon from "../../../components/svg/icon/SettingsIcon";

export default {
  title: "svg/icon/SettingsIcon",
  parameters: {
    componentSubtitle: "A settings icon."
  },
  component: SettingsIcon,
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
  return <SettingsIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <SettingsIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <SettingsIcon size="100px" color="red" />;
