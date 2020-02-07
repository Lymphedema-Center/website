import React from "react";
import SignInIcon from "../../../../components/svg/icon/SignInIcon";

describe("SignInIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<SignInIcon />) as unknown) as Symbol);
  });
});
