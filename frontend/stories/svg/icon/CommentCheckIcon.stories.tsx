import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import CommentCheckIcon from "../../../components/svg/icon/CommentCheckIcon";

export default {
  title: "svg/icon/CommentCheckIcon",
  parameters: {
    componentSubtitle: "A user avatar icon"
  },
  component: CommentCheckIcon,
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
  return <CommentCheckIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => (
  <CommentCheckIcon size="25%" color="blue" />
);
export const SizeWithPixels = () => (
  <CommentCheckIcon size="100px" color="red" />
);
