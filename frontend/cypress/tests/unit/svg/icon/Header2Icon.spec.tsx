import React from "react";
import Header2Icon from "../../../../../components/svg/icon/Header2Icon";

describe("Header2Icon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <Header2Icon size={size} data-cy="Header2Icon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=Header2Icon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <Header2Icon size="48px" data-cy="Header2Icon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=Header2Icon]").should("have.css", "fill", color);
    });
  });
});
