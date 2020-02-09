import React from "react";
import CloseIcon from "../../../../../components/svg/icon/CloseIcon";

describe("CloseIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<CloseIcon />) as unknown) as Symbol);
  });
});
