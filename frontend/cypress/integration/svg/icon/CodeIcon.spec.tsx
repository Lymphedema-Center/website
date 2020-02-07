import React from "react";
import CodeIcon from "../../../../components/svg/icon/CodeIcon";

describe("CodeIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<CodeIcon />) as unknown) as Symbol);
  });
});
