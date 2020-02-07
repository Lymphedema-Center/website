import React from "react";
import ErrorIcon from "../../../../components/svg/icon/ErrorIcon";

describe("ErrorIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<ErrorIcon />) as unknown) as Symbol);
  });
});
