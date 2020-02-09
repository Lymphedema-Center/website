import React from "react";
import ResetIcon from "../../../../../components/svg/icon/ResetIcon";

describe("ResetIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<ResetIcon size={size} data-cy="ResetIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=ResetIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <ResetIcon size="48px" data-cy="ResetIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=ResetIcon]").should("have.css", "fill", color);
    });
  });
});
