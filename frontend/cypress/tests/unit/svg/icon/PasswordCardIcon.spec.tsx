import React from "react";
import PasswordCardIcon from "../../../../../components/svg/icon/PasswordCardIcon";

describe("PasswordCardIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<PasswordCardIcon />) as unknown) as Symbol);
  });
});
