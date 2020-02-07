import React from "react";
import HamburgerIcon from "../../../../components/svg/icon/HamburgerIcon";

describe("HamburgerIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<HamburgerIcon />) as unknown) as Symbol);
  });
});
