import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import DialogIcon from "../../../components/svg/icon/DialogIcon";

export default {
  title: "svg/icon/DialogIcon",
  parameters: {
    componentSubtitle: "A dialog icon."
  },
  component: DialogIcon,
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
  return <DialogIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <DialogIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <DialogIcon size="100px" color="red" />;
