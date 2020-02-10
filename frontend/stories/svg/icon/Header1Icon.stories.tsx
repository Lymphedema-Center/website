import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import Header1Icon from "../../../components/svg/icon/Header1Icon";

export default {
  title: "svg/icon/Header1Icon",
  parameters: {
    componentSubtitle: "An icon to denote a large heading."
  },
  component: Header1Icon,
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
  return <Header1Icon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <Header1Icon size="25%" color="blue" />;
export const SizeWithPixels = () => <Header1Icon size="100px" color="red" />;
