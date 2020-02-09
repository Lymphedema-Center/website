import React from "react";
import LightbulbIcon from "../../../../../components/svg/icon/LightbulbIcon";

describe("LightbulbIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<LightbulbIcon />) as unknown) as Symbol);
  });
});
