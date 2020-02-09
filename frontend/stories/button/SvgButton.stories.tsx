import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import SvgButton from "../../components/button/SvgButton";
import HamburgerIcon from "../../components/svg/icon/HamburgerIcon";

export default {
  title: "button/SvgButton",
  parameters: {
    componentSubtitle: "Svg wrapped in a button."
  },
  component: SvgButton,
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
  const height = number("Height (px)", 30, numberOptions, "Normal-Knobs");
  const width = number("Width (px)", 30, numberOptions, "Normal-Knobs");
  return (
    <SvgButton
      aria-label="HamburgerButton"
      height={`${height}px`}
      width={`${width}px`}
      svg={<HamburgerIcon size="100%" />}
      onClick={action("button-click")}
    />
  );
};

export const SizeWithPercent = () => (
  <SvgButton
    aria-label="HamburgerButton"
    height="25%"
    width="25%"
    svg={<HamburgerIcon size="100%" />}
  />
);
export const SizeWithPixels = () => (
  <SvgButton
    aria-label="HamburgerButton"
    height="35px"
    width="35px"
    svg={<HamburgerIcon size="100%" />}
  />
);
