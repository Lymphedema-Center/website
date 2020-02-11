import React from "react";
import LymphedemaLeg from "../../../../../components/svg/graphic/LymphedemaLeg";

describe("LymphedemaLeg component", function() {
  describe("props", () => {
    const width = "67px";
    const height = "125px";

    it("only width supplied", function() {
      cy.mount(
        ((
          <LymphedemaLeg width={width} data-cy="LymphedemaLeg" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LymphedemaLeg]")
        .should("have.css", "width", width)
        .and("have.css", "height", height);
    });

    it("only height supplied", function() {
      cy.mount(
        ((
          <LymphedemaLeg height={height} data-cy="LymphedemaLeg" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LymphedemaLeg]")
        .should("have.css", "width", width)
        .and("have.css", "height", height);
    });

    it("neither supplied", function() {
      // if neither, still verify mount
      cy.mount(
        ((<LymphedemaLeg data-cy="LymphedemaLeg" />) as unknown) as Symbol
      );
    });
  });
});
