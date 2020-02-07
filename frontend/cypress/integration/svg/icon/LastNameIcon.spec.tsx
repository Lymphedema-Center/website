import React from "react";
import LastNameIcon from "../../../../components/svg/icon/LastNameIcon";

describe("LastNameIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<LastNameIcon />) as unknown) as Symbol);
  });
});
