import React from "react";
import SignUpIcon from "../../../../../components/svg/icon/SignUpIcon";

describe("SignUpIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<SignUpIcon size={size} data-cy="SignUpIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=SignUpIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <SignUpIcon size="48px" data-cy="SignUpIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SignUpIcon]").should("have.css", "fill", color);
    });
  });
});
