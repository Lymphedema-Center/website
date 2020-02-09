import React from "react";
import LymphedemaCenterLogo from "../../../../../components/svg/brand/LymphedemaCenterLogo";

describe("LymphedemaCenterLogo component", function() {
  it("mounts", function() {
    // mount the component
    cy.mount(((<LymphedemaCenterLogo />) as unknown) as Symbol);
  });
});
