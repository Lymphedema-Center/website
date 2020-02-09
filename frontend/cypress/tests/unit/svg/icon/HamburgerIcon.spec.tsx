import React from "react";
import HamburgerIcon from "../../../../../components/svg/icon/HamburgerIcon";

describe("HamburgerIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <HamburgerIcon size={size} data-cy="HamburgerIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=HamburgerIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <HamburgerIcon size="48px" data-cy="HamburgerIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=HamburgerIcon]").should("have.css", "fill", color);
    });
  });
});
