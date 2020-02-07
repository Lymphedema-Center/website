import React from "react";
import SendIcon from "../../../../components/svg/icon/SendIcon";

describe("SendIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<SendIcon />) as unknown) as Symbol);
  });
});
