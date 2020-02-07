import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import ItalicIcon from "../../../components/svg/icon/ItalicIcon";

export default {
  title: "svg/icon/ItalicIcon",
  parameters: {
    componentSubtitle: "An icon denoting italic text decoration."
  },
  component: ItalicIcon,
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
  return <ItalicIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <ItalicIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <ItalicIcon size="100px" color="red" />;
