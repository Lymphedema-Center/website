import React from "react";
import PreviousIcon from "../../../../components/svg/icon/PreviousIcon";

describe("PreviousIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<PreviousIcon />) as unknown) as Symbol);
  });
});
