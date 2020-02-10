import React from "react";
import LightbulbIcon from "../../../../../components/svg/icon/LightbulbIcon";

describe("LightbulbIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <LightbulbIcon size={size} data-cy="LightbulbIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LightbulbIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <LightbulbIcon size="48px" data-cy="LightbulbIcon" color={color} />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=LightbulbIcon]").should("have.css", "fill", color);
    });
  });
});
