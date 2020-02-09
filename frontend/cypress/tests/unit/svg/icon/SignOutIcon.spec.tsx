import React from "react";
import SignOutIcon from "../../../../../components/svg/icon/SignOutIcon";

describe("SignOutIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <SignOutIcon size={size} data-cy="SignOutIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SignOutIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <SignOutIcon size="48px" data-cy="SignOutIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SignOutIcon]").should("have.css", "fill", color);
    });
  });
});
