import React from "react";
import CommentCheckIcon from "../../../../../components/svg/icon/CommentCheckIcon";

describe("CommentCheckIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<CommentCheckIcon />) as unknown) as Symbol);
  });
});
