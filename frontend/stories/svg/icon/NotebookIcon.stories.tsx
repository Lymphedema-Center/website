import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import NotebookIcon from "../../../components/svg/icon/NotebookIcon";

export default {
  title: "svg/icon/NotebookIcon",
  parameters: {
    componentSubtitle: "A notebook icon."
  },
  component: NotebookIcon,
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
  return <NotebookIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <NotebookIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <NotebookIcon size="100px" color="red" />;
