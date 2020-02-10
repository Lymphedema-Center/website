import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import EditIcon from "../../../components/svg/icon/EditIcon";

export default {
  title: "svg/icon/EditIcon",
  parameters: {
    componentSubtitle: "An edit icon."
  },
  component: EditIcon,
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
  return <EditIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <EditIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <EditIcon size="100px" color="red" />;
