import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import SendIcon from "../../../components/svg/icon/SendIcon";

export default {
  title: "svg/icon/SendIcon",
  parameters: {
    componentSubtitle: "A send icon."
  },
  component: SendIcon,
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
  return <SendIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <SendIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <SendIcon size="100px" color="red" />;
