import React from "react";
import AvatarIcon from "../../../../../components/svg/icon/AvatarIcon";

describe("AvatarIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<AvatarIcon size={size} data-cy="AvatarIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=AvatarIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <AvatarIcon size="48px" data-cy="AvatarIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=AvatarIcon]").should("have.css", "fill", color);
    });
  });
});
