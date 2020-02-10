import React from "react";
import ImageIcon from "../../../../../components/svg/icon/ImageIcon";

describe("ImageIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<ImageIcon size={size} data-cy="ImageIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=ImageIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <ImageIcon size="48px" data-cy="ImageIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=ImageIcon]").should("have.css", "fill", color);
    });
  });
});
