import React from "react";
import CodeIcon from "../../../../../components/svg/icon/CodeIcon";

describe("CodeIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<CodeIcon size={size} data-cy="CodeIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=CodeIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <CodeIcon size="48px" data-cy="CodeIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=CodeIcon]").should("have.css", "fill", color);
    });
  });
});
