import React from "react";
import DeltaIcon from "../../../../../components/svg/icon/DeltaIcon";

describe("DeltaIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<DeltaIcon size={size} data-cy="DeltaIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=DeltaIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <DeltaIcon size="48px" data-cy="DeltaIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=DeltaIcon]").should("have.css", "fill", color);
    });
  });
});
