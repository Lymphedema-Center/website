import React from "react";
import SvgButton from "../../../../components/button/SvgButton";
import HamburgerIcon from "../../../../components/svg/icon/HamburgerIcon";

describe("SvgButton component", function() {
  const svgSize = "30px";

  before(function() {
    // mount the component
    cy.mount(
      ((
        <SvgButton
          data-cy="SvgButton"
          aria-label="HamburgerButton"
          height={svgSize}
          width={svgSize}
          svg={<HamburgerIcon size="100%" data-cy="SvgElement" />}
        />
      ) as unknown) as Symbol
    );
  });

  it("renders the svg", function() {
    // check for svg
    cy.get("[data-cy=SvgButton]").should(
      "have.descendants",
      "[data-cy=SvgElement]"
    );
  });

  describe("props", function() {
    // there is an error in either styled-components || cypress
    it.skip("width works", function() {
      cy.get("[data-cy=SvgButton]").should("have.css", "width", svgSize);
    });

    // there is an error in either styled-components || cypress
    it.skip("height works", function() {
      cy.get("[data-cy=SvgButton]").should("have.css", "height", svgSize);
    });
  });
});
