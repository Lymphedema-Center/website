import React from "react";
import SignInIcon from "../../../../../components/svg/icon/SignInIcon";

describe("SignInIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<SignInIcon size={size} data-cy="SignInIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=SignInIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <SignInIcon size="48px" data-cy="SignInIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SignInIcon]").should("have.css", "fill", color);
    });
  });
});
