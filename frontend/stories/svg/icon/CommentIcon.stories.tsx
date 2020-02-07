import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import CommentIcon from "../../../components/svg/icon/CommentIcon";

export default {
  title: "svg/icon/CommentIcon",
  parameters: {
    componentSubtitle: "A comment icon."
  },
  component: CommentIcon,
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
  return <CommentIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <CommentIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <CommentIcon size="100px" color="red" />;
