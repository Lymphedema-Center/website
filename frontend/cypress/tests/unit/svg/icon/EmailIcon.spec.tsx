import React from "react";
import EmailIcon from "../../../../../components/svg/icon/EmailIcon";

describe("EmailIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<EmailIcon size={size} data-cy="EmailIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=EmailIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <EmailIcon size="48px" data-cy="EmailIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=EmailIcon]").should("have.css", "fill", color);
    });
  });
});
