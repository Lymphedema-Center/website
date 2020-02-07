import React from "react";
import AvatarIcon from "../../../../components/svg/icon/AvatarIcon";

describe("AvatarIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<AvatarIcon />) as unknown) as Symbol);
  });
});
