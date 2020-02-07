import React from "react";
import FirstNameIcon from "../../../../components/svg/icon/FirstNameIcon";

describe("FirstNameIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<FirstNameIcon />) as unknown) as Symbol);
  });
});
