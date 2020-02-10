import React from "react";
import SettingsIcon from "../../../../../components/svg/icon/SettingsIcon";

describe("SettingsIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <SettingsIcon size={size} data-cy="SettingsIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SettingsIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <SettingsIcon size="48px" data-cy="SettingsIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SettingsIcon]").should("have.css", "fill", color);
    });
  });
});
