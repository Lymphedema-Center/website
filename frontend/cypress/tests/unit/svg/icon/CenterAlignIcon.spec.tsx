import React from "react";
import CenterAlignIcon from "../../../../../components/svg/icon/CenterAlignIcon";

describe("CenterAlignIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <CenterAlignIcon size={size} data-cy="CenterAlignIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=CenterAlignIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <CenterAlignIcon
            size="48px"
            data-cy="CenterAlignIcon"
            color={color}
          />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=CenterAlignIcon]").should("have.css", "fill", color);
    });
  });
});
