import React from "react";
import CheckIcon from "../../../../../components/svg/icon/CheckIcon";

describe("CheckIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<CheckIcon size={size} data-cy="CheckIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=CheckIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <CheckIcon size="48px" data-cy="CheckIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=CheckIcon]").should("have.css", "fill", color);
    });
  });
});
