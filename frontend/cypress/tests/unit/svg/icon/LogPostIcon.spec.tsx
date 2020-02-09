import React from "react";
import LogPostIcon from "../../../../../components/svg/icon/LogPostIcon";

describe("LogPostIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<LogPostIcon />) as unknown) as Symbol);
  });
});
