import React from "react";
import ShieldIcon from "../../../../components/svg/icon/ShieldIcon";

describe("ShieldIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<ShieldIcon />) as unknown) as Symbol);
  });
});
