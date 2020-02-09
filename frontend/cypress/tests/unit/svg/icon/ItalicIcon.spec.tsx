import React from "react";
import ItalicIcon from "../../../../../components/svg/icon/ItalicIcon";

describe("ItalicIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<ItalicIcon />) as unknown) as Symbol);
  });
});
