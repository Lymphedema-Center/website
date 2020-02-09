import React from "react";
import Header1Icon from "../../../../../components/svg/icon/Header1Icon";

describe("Header1Icon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <Header1Icon size={size} data-cy="Header1Icon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=Header1Icon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <Header1Icon size="48px" data-cy="Header1Icon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=Header1Icon]").should("have.css", "fill", color);
    });
  });
});
