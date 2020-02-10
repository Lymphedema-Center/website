import React from "react";
import EmailCardIcon from "../../../../../components/svg/icon/EmailCardIcon";

describe("EmailCardIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <EmailCardIcon size={size} data-cy="EmailCardIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=EmailCardIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <EmailCardIcon size="48px" data-cy="EmailCardIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=EmailCardIcon]").should("have.css", "fill", color);
    });
  });
});
