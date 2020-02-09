import React from "react";
import SaveIcon from "../../../../../components/svg/icon/SaveIcon";

describe("SaveIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<SaveIcon />) as unknown) as Symbol);
  });
});
