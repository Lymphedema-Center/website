import React from "react";
import SuccessIcon from "../../../../components/svg/icon/SuccessIcon";

describe("SuccessIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<SuccessIcon />) as unknown) as Symbol);
  });
});
