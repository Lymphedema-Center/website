import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import LastNameIcon from "../../../components/svg/icon/LastNameIcon";

export default {
  title: "svg/icon/LastNameIcon",
  parameters: {
    componentSubtitle: "A icon denoting last name."
  },
  component: LastNameIcon,
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
  return <LastNameIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <LastNameIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <LastNameIcon size="100px" color="red" />;
