import React from "react";
import BoldIcon from "../../../../../components/svg/icon/BoldIcon";

describe("BoldIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<BoldIcon size={size} data-cy="BoldIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=BoldIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <BoldIcon size="48px" data-cy="BoldIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=BoldIcon]").should("have.css", "fill", color);
    });
  });
});
