import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import CodeIcon from "../../../components/svg/icon/CodeIcon";

export default {
  title: "svg/icon/CodeIcon",
  parameters: {
    componentSubtitle: "An icon representing a confirmation code."
  },
  component: CodeIcon,
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
  return <CodeIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <CodeIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <CodeIcon size="100px" color="red" />;
