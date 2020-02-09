import React from "react";
import LymphedemaCenterLogo from "../../../../../components/svg/brand/LymphedemaCenterLogo";

describe("LymphedemaCenterLogo component", function() {
  describe("props", () => {
    const width = "1049px";
    const height = "371px";

    it("only width supplied", function() {
      cy.mount(
        ((
          <LymphedemaCenterLogo width={width} data-cy="LymphedemaCenterLogo" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LymphedemaCenterLogo]")
        .should("have.css", "width", width)
        .and("have.css", "height", height);
    });

    it("only height supplied", function() {
      cy.mount(
        ((
          <LymphedemaCenterLogo
            height={height}
            data-cy="LymphedemaCenterLogo"
          />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LymphedemaCenterLogo]")
        .should("have.css", "width", width)
        .and("have.css", "height", height);
    });

    it("neither supplied", function() {
      // if neither, still verify mount
      cy.mount(
        ((
          <LymphedemaCenterLogo data-cy="LymphedemaCenterLogo" />
        ) as unknown) as Symbol
      );
    });
  });
});
