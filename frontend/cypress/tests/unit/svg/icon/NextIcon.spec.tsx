import React from "react";
import NextIcon from "../../../../../components/svg/icon/NextIcon";

describe("NextIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<NextIcon size={size} data-cy="NextIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=NextIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <NextIcon size="48px" data-cy="NextIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=NextIcon]").should("have.css", "fill", color);
    });
  });
});
