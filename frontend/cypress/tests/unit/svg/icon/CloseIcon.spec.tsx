import React from "react";
import CloseIcon from "../../../../../components/svg/icon/CloseIcon";

describe("CloseIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<CloseIcon size={size} data-cy="CloseIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=CloseIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <CloseIcon size="48px" data-cy="CloseIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=CloseIcon]").should("have.css", "fill", color);
    });
  });
});
