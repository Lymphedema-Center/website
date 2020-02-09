import React from "react";
import SearchIcon from "../../../../../components/svg/icon/SearchIcon";

describe("SearchIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<SearchIcon />) as unknown) as Symbol);
  });
});
