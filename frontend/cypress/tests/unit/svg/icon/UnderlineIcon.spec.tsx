import React from "react";
import UnderlineIcon from "../../../../../components/svg/icon/UnderlineIcon";

describe("UnderlineIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <UnderlineIcon size={size} data-cy="UnderlineIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=UnderlineIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <UnderlineIcon size="48px" data-cy="UnderlineIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=UnderlineIcon]").should("have.css", "fill", color);
    });
  });
});
