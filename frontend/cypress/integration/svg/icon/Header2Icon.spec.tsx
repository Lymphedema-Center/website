import React from "react";
import Header2Icon from "../../../../components/svg/icon/Header2Icon";

describe("Header2Icon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<Header2Icon />) as unknown) as Symbol);
  });
});
