import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import AvatarIcon from "../../../components/svg/icon/AvatarIcon";

export default {
  title: "svg/icon/AvatarIcon",
  parameters: {
    componentSubtitle: "A user avatar icon"
  },
  component: AvatarIcon,
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
  return <AvatarIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <AvatarIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <AvatarIcon size="100px" color="red" />;
