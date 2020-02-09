import React from "react";
import EditIcon from "../../../../../components/svg/icon/EditIcon";

describe("EditIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<EditIcon size={size} data-cy="EditIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=EditIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <EditIcon size="48px" data-cy="EditIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=EditIcon]").should("have.css", "fill", color);
    });
  });
});
