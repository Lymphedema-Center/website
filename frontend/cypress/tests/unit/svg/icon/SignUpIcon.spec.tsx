import React from "react";
import SignUpIcon from "../../../../../components/svg/icon/SignUpIcon";

describe("SignUpIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<SignUpIcon />) as unknown) as Symbol);
  });
});
