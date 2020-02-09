import React from "react";
import TargetIcon from "../../../../../components/svg/icon/TargetIcon";

describe("TargetIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<TargetIcon size={size} data-cy="TargetIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=TargetIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <TargetIcon size="48px" data-cy="TargetIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=TargetIcon]").should("have.css", "fill", color);
    });
  });
});
