import React from "react";
import SignOutIcon from "../../../../components/svg/icon/SignOutIcon";

describe("SignOutIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<SignOutIcon />) as unknown) as Symbol);
  });
});
