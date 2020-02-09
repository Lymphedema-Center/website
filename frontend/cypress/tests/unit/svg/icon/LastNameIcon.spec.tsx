import React from "react";
import LastNameIcon from "../../../../../components/svg/icon/LastNameIcon";

describe("LastNameIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <LastNameIcon size={size} data-cy="LastNameIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LastNameIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <LastNameIcon size="48px" data-cy="LastNameIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LastNameIcon]").should("have.css", "fill", color);
    });
  });
});
