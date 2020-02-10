import React from "react";
import SearchIcon from "../../../../../components/svg/icon/SearchIcon";

describe("SearchIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<SearchIcon size={size} data-cy="SearchIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=SearchIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <SearchIcon size="48px" data-cy="SearchIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SearchIcon]").should("have.css", "fill", color);
    });
  });
});
