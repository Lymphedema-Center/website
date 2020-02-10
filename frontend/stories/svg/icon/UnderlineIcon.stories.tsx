import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import UnderlineIcon from "../../../components/svg/icon/UnderlineIcon";

export default {
  title: "svg/icon/UnderlineIcon",
  parameters: {
    componentSubtitle: "An icon denoting the underline text decoration."
  },
  component: UnderlineIcon,
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
  return <UnderlineIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <UnderlineIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <UnderlineIcon size="100px" color="red" />;
