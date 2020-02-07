import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import Header2Icon from "../../../components/svg/icon/Header2Icon";

export default {
  title: "svg/icon/Header2Icon",
  parameters: {
    componentSubtitle: "An icon to denote a medium header."
  },
  component: Header2Icon,
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
  return <Header2Icon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <Header2Icon size="25%" color="blue" />;
export const SizeWithPixels = () => <Header2Icon size="100px" color="red" />;
