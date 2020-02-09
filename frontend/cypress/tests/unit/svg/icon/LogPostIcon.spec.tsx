import React from "react";
import LogPostIcon from "../../../../../components/svg/icon/LogPostIcon";

describe("LogPostIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <LogPostIcon size={size} data-cy="LogPostIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LogPostIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <LogPostIcon size="48px" data-cy="LogPostIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LogPostIcon]").should("have.css", "fill", color);
    });
  });
});
