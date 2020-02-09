import React from "react";
import NameCardIcon from "../../../../../components/svg/icon/NameCardIcon";

describe("NameCardIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <NameCardIcon size={size} data-cy="NameCardIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=NameCardIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <NameCardIcon size="48px" data-cy="NameCardIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=NameCardIcon]").should("have.css", "fill", color);
    });
  });
});
