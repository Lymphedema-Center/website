import React from "react";
import NotebookIcon from "../../../../../components/svg/icon/NotebookIcon";

describe("NotebookIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <NotebookIcon size={size} data-cy="NotebookIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=NotebookIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <NotebookIcon size="48px" data-cy="NotebookIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=NotebookIcon]").should("have.css", "fill", color);
    });
  });
});
