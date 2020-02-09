import React from "react";
import DialogIcon from "../../../../../components/svg/icon/DialogIcon";

describe("DialogIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<DialogIcon />) as unknown) as Symbol);
  });
});
