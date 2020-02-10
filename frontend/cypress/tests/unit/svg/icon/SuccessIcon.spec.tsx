import React from "react";
import SuccessIcon from "../../../../../components/svg/icon/SuccessIcon";

describe("SuccessIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <SuccessIcon size={size} data-cy="SuccessIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SuccessIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <SuccessIcon size="48px" data-cy="SuccessIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SuccessIcon]").should("have.css", "fill", color);
    });
  });
});
