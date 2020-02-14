import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import PageBanner from "../../components/composed/PageBanner";
import TargetIcon from "../../components/svg/icon/TargetIcon";

export default {
  title: "composed/PageBanner",
  parameters: {
    componentSubtitle: "The banner for a page."
  },
  component: PageBanner,
  decorators: [withA11y]
};

export const normal = () => {
  return (
    <PageBanner svgCtr={TargetIcon} color="#E0EEEA" message="Symptoms Guide" />
  );
};
