import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import NameCardIcon from "../../../components/svg/icon/NameCardIcon";

export default {
  title: "svg/icon/NameCardIcon",
  parameters: {
    componentSubtitle: "A namecard icon."
  },
  component: NameCardIcon,
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
  return <NameCardIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <NameCardIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <NameCardIcon size="100px" color="red" />;
