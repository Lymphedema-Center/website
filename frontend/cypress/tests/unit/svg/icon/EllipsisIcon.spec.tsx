import React from "react";
import EllipsisIcon from "../../../../../components/svg/icon/EllipsisIcon";

describe("EllipsisIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<EllipsisIcon />) as unknown) as Symbol);
  });
});
