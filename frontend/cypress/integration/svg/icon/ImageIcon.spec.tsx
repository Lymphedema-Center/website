import React from "react";
import ImageIcon from "../../../../components/svg/icon/ImageIcon";

describe("ImageIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<ImageIcon />) as unknown) as Symbol);
  });
});
