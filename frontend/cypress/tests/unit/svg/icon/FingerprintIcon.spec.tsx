import React from "react";
import FingerprintIcon from "../../../../../components/svg/icon/FingerprintIcon";

describe("FingerprintIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<FingerprintIcon />) as unknown) as Symbol);
  });
});
