import React from "react";
import ForumPostIcon from "../../../../../components/svg/icon/ForumPostIcon";

describe("ForumPostIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<ForumPostIcon />) as unknown) as Symbol);
  });
});
