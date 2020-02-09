import React from "react";
import EmailCardIcon from "../../../../../components/svg/icon/EmailCardIcon";

describe("EmailCardIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<EmailCardIcon />) as unknown) as Symbol);
  });
});
