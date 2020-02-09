import React from "react";
import SendIcon from "../../../../../components/svg/icon/SendIcon";

describe("SendIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((<SendIcon size={size} data-cy="SendIcon" />) as unknown) as Symbol
      );
      cy.get("[data-cy=SendIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <SendIcon size="48px" data-cy="SendIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=SendIcon]").should("have.css", "fill", color);
    });
  });
});
