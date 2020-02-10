import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import FingerprintIcon from "../../../components/svg/icon/FingerprintIcon";

export default {
  title: "svg/icon/FingerprintIcon",
  parameters: {
    componentSubtitle: "A fingerprint icon."
  },
  component: FingerprintIcon,
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
  return <FingerprintIcon size={`${size}px`} color={fill} />;
};

export const SizeWithPercent = () => (
  <FingerprintIcon size="25%" color="blue" />
);
export const SizeWithPixels = () => (
  <FingerprintIcon size="100px" color="red" />
);
