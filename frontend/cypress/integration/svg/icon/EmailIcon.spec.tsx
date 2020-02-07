import React from "react";
import EmailIcon from "../../../../components/svg/icon/EmailIcon";

describe("EmailIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<EmailIcon />) as unknown) as Symbol);
  });
});
