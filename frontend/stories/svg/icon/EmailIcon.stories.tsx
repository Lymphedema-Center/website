import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import EmailIcon from "../../../components/svg/icon/EmailIcon";

export default {
  title: "svg/icon/EmailIcon",
  parameters: {
    componentSubtitle: "An email icon."
  },
  component: EmailIcon,
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
  return <EmailIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => <EmailIcon size="25%" color="blue" />;
export const SizeWithPixels = () => <EmailIcon size="100px" color="red" />;
