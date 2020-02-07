import React from "react";
import ResetIcon from "../../../../components/svg/icon/ResetIcon";

describe("ResetIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<ResetIcon />) as unknown) as Symbol);
  });
});
