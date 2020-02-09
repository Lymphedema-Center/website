import React from "react";
import UnderlineIcon from "../../../../../components/svg/icon/UnderlineIcon";

describe("UnderlineIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<UnderlineIcon />) as unknown) as Symbol);
  });
});
