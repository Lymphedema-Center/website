import React from "react";
import NameCardIcon from "../../../../components/svg/icon/NameCardIcon";

describe("NameCardIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<NameCardIcon />) as unknown) as Symbol);
  });
});
