import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import SearchIcon from "../../../components/svg/icon/SearchIcon";

export default {
  title: "svg/icon/SearchIcon",
  parameters: {
    componentSubtitle: "A search icon."
  },
  component: SearchIcon,
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
  return <SearchIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <SearchIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <SearchIcon size="100px" color="red" />;
