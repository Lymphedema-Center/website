import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import SvgCircle from "../../components/decoration/SvgCircle";
import LightbulbIcon from "../../components/svg/icon/LightbulbIcon";

export default {
  title: "decoration/SvgCircle",
  parameters: {
    componentSubtitle: "Svg wrapped in a circle."
  },
  component: SvgCircle,
  decorators: [withA11y, withKnobs]
};

// knobs
const numberOptions = {
  range: true,
  min: 10,
  max: 100,
  step: 5
};

export const normal = () => {
  const size = number("Size (px)", 60, numberOptions, "Normal-Knobs");
  const fill = color("Color", "#f2f1f1", "Normal-Knobs");
  return (
    <SvgCircle
      aria-label="HamburgerButton"
      size={`${size}px`}
      color={fill}
      svg={<LightbulbIcon size="60%" />}
      onClick={action("button-click")}
    />
  );
};

export const SizeWithPercent = () => (
  <SvgCircle
    aria-label="HamburgerButton"
    size="100px"
    color="blue"
    svg={<LightbulbIcon size="60%" />}
  />
);
export const SizeWithPixels = () => (
  <SvgCircle
    aria-label="HamburgerButton"
    size="60px"
    color="red"
    svg={<LightbulbIcon size="60%" />}
  />
);
