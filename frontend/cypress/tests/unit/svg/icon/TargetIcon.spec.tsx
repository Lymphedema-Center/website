import React from "react";
import TargetIcon from "../../../../../components/svg/icon/TargetIcon";

describe("TargetIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<TargetIcon />) as unknown) as Symbol);
  });
});
