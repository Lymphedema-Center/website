import React from "react";
import CommentIcon from "../../../../../components/svg/icon/CommentIcon";

describe("CommentIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<CommentIcon />) as unknown) as Symbol);
  });
});
