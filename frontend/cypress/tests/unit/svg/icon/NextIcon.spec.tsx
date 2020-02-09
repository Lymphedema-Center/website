import React from "react";
import NextIcon from "../../../../../components/svg/icon/NextIcon";

describe("NextIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<NextIcon />) as unknown) as Symbol);
  });
});
