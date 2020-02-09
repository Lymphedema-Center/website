import React from "react";
import TitleIcon from "../../../../../components/svg/icon/TitleIcon";

describe("TitleIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<TitleIcon size={size} data-cy="TitleIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=TitleIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <TitleIcon size="48px" data-cy="TitleIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=TitleIcon]").should("have.css", "fill", color);
    });
  });
});
