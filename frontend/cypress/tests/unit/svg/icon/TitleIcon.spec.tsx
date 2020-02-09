import React from "react";
import TitleIcon from "../../../../../components/svg/icon/TitleIcon";

describe("TitleIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<TitleIcon />) as unknown) as Symbol);
  });
});
