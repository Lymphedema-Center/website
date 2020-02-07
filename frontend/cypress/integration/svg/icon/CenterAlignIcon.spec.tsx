import React from "react";
import CenterAlignIcon from "../../../../components/svg/icon/CenterAlignIcon";

describe("CenterAlignIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<CenterAlignIcon />) as unknown) as Symbol);
  });
});
