import React from "react";
import CommentIcon from "../../../../../components/svg/icon/CommentIcon";

describe("CommentIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <CommentIcon size={size} data-cy="CommentIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=CommentIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <CommentIcon size="48px" data-cy="CommentIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=CommentIcon]").should("have.css", "fill", color);
    });
  });
});
