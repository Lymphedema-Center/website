import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import TitleIcon from "../../../components/svg/icon/TitleIcon";

export default {
  title: "svg/icon/TitleIcon",
  parameters: {
    componentSubtitle: "A title icon."
  },
  component: TitleIcon,
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
  return <TitleIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <TitleIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <TitleIcon size="100px" color="red" />;
