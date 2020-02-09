import React from "react";
import SaveIcon from "../../../../../components/svg/icon/SaveIcon";

describe("SaveIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<SaveIcon size={size} data-cy="SaveIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=SaveIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <SaveIcon size="48px" data-cy="SaveIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SaveIcon]").should("have.css", "fill", color);
    });
  });
});
