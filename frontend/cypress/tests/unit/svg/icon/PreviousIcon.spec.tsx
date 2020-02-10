import React from "react";
import PreviousIcon from "../../../../../components/svg/icon/PreviousIcon";

describe("PreviousIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <PreviousIcon size={size} data-cy="PreviousIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=PreviousIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <PreviousIcon size="48px" data-cy="PreviousIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=PreviousIcon]").should("have.css", "fill", color);
    });
  });
});
