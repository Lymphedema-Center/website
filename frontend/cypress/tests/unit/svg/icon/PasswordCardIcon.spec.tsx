import React from "react";
import PasswordCardIcon from "../../../../../components/svg/icon/PasswordCardIcon";

describe("PasswordCardIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <PasswordCardIcon size={size} data-cy="PasswordCardIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=PasswordCardIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <PasswordCardIcon
            size="48px"
            data-cy="PasswordCardIcon"
            color={color}
          />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=PasswordCardIcon]").should("have.css", "fill", color);
    });
  });
});
