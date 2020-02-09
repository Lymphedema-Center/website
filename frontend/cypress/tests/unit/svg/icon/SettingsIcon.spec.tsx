import React from "react";
import SettingsIcon from "../../../../../components/svg/icon/SettingsIcon";

describe("SettingsIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<SettingsIcon />) as unknown) as Symbol);
  });
});
