import React from "react";
import ItalicIcon from "../../../../../components/svg/icon/ItalicIcon";

describe("ItalicIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<ItalicIcon size={size} data-cy="ItalicIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=ItalicIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <ItalicIcon size="48px" data-cy="ItalicIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=ItalicIcon]").should("have.css", "fill", color);
    });
  });
});
