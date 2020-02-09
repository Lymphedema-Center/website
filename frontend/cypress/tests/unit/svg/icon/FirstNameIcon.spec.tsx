import React from "react";
import FirstNameIcon from "../../../../../components/svg/icon/FirstNameIcon";

describe("FirstNameIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <FirstNameIcon size={size} data-cy="FirstNameIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=FirstNameIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <FirstNameIcon size="48px" data-cy="FirstNameIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=FirstNameIcon]").should("have.css", "fill", color);
    });
  });
});
