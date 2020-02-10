import React from "react";
import FingerprintIcon from "../../../../../components/svg/icon/FingerprintIcon";

describe("FingerprintIcon component", function() {
  describe("props", () => {
    it("size works", function() {
      const size = "48px";
      cy.mount(
        ((
          <FingerprintIcon size={size} data-cy="FingerprintIcon" />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=FingerprintIcon]").should("have.css", "width", size);
    });

    it("color works", function() {
      const color = "rgb(0, 0, 255)";
      cy.mount(
        ((
          <FingerprintIcon
            size="48px"
            data-cy="FingerprintIcon"
            color={color}
          />
        ) as unknown) as Symbol
      );
      cy.get("[data-cy=FingerprintIcon]").should("have.css", "fill", color);
    });
  });
});
