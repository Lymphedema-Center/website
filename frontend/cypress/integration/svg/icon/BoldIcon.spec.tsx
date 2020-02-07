import React from "react";
import BoldIcon from "../../../../components/svg/icon/BoldIcon";

describe("BoldIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<BoldIcon />) as unknown) as Symbol);
  });
});
