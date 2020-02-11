import React from "react";
import LymphaticSystem from "../../../../../components/svg/graphic/LymphaticSystem";

describe("LymphaticSystem component", function() {
  describe("props", () => {
    const width = "187px";
    const height = "340px";

    it("only width supplied", function() {
      cy.mount(
        ((
          <LymphaticSystem width={width} data-cy="LymphaticSystem" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LymphaticSystem]")
        .should("have.css", "width", width)
        .and("have.css", "height", height);
    });

    it("only height supplied", function() {
      cy.mount(
        ((
          <LymphaticSystem height={height} data-cy="LymphaticSystem" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LymphaticSystem]")
        .should("have.css", "width", width)
        .and("have.css", "height", height);
    });

    it("neither supplied", function() {
      // if neither, still verify mount
      cy.mount(
        ((<LymphaticSystem data-cy="LymphaticSystem" />) as unknown) as Symbol
      );
    });
  });
});
