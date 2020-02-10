import React from "react";
import ForumPostIcon from "../../../../../components/svg/icon/ForumPostIcon";

describe("ForumPostIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <ForumPostIcon size={size} data-cy="ForumPostIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=ForumPostIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <ForumPostIcon size="48px" data-cy="ForumPostIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=ForumPostIcon]").should("have.css", "fill", color);
    });
  });
});
