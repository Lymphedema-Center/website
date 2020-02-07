import React from "react";
import CheckIcon from "../../../../components/svg/icon/CheckIcon";

describe("CheckIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<CheckIcon />) as unknown) as Symbol);
  });
});
