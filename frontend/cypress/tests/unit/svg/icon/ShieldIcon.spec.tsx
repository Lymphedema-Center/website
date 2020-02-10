import React from "react";
import ShieldIcon from "../../../../../components/svg/icon/ShieldIcon";

describe("ShieldIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<ShieldIcon size={size} data-cy="ShieldIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=ShieldIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <ShieldIcon size="48px" data-cy="ShieldIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=ShieldIcon]").should("have.css", "fill", color);
    });
  });
});
