import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import ForumPostIcon from "../../../components/svg/icon/ForumPostIcon";

export default {
  title: "svg/icon/ForumPostIcon",
  parameters: {
    componentSubtitle: "A forum post icon."
  },
  component: ForumPostIcon,
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
  return <ForumPostIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <ForumPostIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <ForumPostIcon size="100px" color="red" />;
