import React from "react";
import ErrorIcon from "../../../../../components/svg/icon/ErrorIcon";

describe("ErrorIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<ErrorIcon size={size} data-cy="ErrorIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=ErrorIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <ErrorIcon size="48px" data-cy="ErrorIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=ErrorIcon]").should("have.css", "fill", color);
    });
  });
});
