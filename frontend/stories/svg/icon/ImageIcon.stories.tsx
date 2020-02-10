import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import ImageIcon from "../../../components/svg/icon/ImageIcon";

export default {
  title: "svg/icon/ImageIcon",
  parameters: {
    componentSubtitle: "An image icon."
  },
  component: ImageIcon,
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
  return <ImageIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <ImageIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <ImageIcon size="100px" color="red" />;
