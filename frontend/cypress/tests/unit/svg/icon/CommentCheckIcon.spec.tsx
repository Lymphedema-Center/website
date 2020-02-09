import React from "react";
import CommentCheckIcon from "../../../../../components/svg/icon/CommentCheckIcon";

describe("CommentCheckIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <CommentCheckIcon size={size} data-cy="CommentCheckIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=CommentCheckIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <CommentCheckIcon
            size="48px"
            data-cy="CommentCheckIcon"
            color={color}
          />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=CommentCheckIcon]").should("have.css", "fill", color);
    });
  });
});
