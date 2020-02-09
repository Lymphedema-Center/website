import React from "react";
import EllipsisIcon from "../../../../../components/svg/icon/EllipsisIcon";

describe("EllipsisIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <EllipsisIcon size={size} data-cy="EllipsisIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=EllipsisIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <EllipsisIcon size="48px" data-cy="EllipsisIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=EllipsisIcon]").should("have.css", "fill", color);
    });
  });
});
