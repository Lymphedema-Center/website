import React from "react";
import DialogIcon from "../../../../../components/svg/icon/DialogIcon";

describe("DialogIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<DialogIcon size={size} data-cy="DialogIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=DialogIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <DialogIcon size="48px" data-cy="DialogIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=DialogIcon]").should("have.css", "fill", color);
    });
  });
});
