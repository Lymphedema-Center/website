import React from "react";
import InfoIcon from "../../../../../components/svg/icon/InfoIcon";

describe("InfoIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<InfoIcon />) as unknown) as Symbol);
  });
});
