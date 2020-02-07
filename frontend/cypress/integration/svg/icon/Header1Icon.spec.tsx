import React from "react";
import Header1Icon from "../../../../components/svg/icon/Header1Icon";

describe("Header1Icon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<Header1Icon />) as unknown) as Symbol);
  });
});
