import React from "react";
import DeltaIcon from "../../../../../components/svg/icon/DeltaIcon";

describe("DeltaIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<DeltaIcon />) as unknown) as Symbol);
  });
});
