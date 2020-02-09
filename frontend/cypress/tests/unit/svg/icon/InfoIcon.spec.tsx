import React from "react";
import InfoIcon from "../../../../../components/svg/icon/InfoIcon";

describe("InfoIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<InfoIcon size={size} data-cy="InfoIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=InfoIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <InfoIcon size="48px" data-cy="InfoIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=InfoIcon]").should("have.css", "fill", color);
    });
  });
});
