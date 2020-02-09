import React from "react";
import NotebookIcon from "../../../../../components/svg/icon/NotebookIcon";

describe("NotebookIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<NotebookIcon />) as unknown) as Symbol);
  });
});
