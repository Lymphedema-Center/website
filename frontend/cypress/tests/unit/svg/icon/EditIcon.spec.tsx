import React from "react";
import EditIcon from "../../../../../components/svg/icon/EditIcon";

describe("EditIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<EditIcon />) as unknown) as Symbol);
  });
});
