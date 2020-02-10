import React from "react";
import SvgButton from "../../../../components/button/SvgButton";
import HamburgerIcon from "../../../../components/svg/icon/HamburgerIcon";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";

describe("SvgButton component", function() {
  const svgSize = "30px";

  before(function() {
    // mount the component
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <SvgButton
            data-cy="SvgButton"
            aria-label="HamburgerButton"
            height={svgSize}
            width={svgSize}
            svg={<HamburgerIcon size="100%" data-cy="SvgElement" />}
          />
        </ThemeProvider>
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

  // there is an error in either styled-components || cypress
  describe.skip("props", function() {
    it("width works", function() {
      cy.get("[data-cy=SvgButton]").should("have.css", "width", svgSize);
    });

    it("height works", function() {
      cy.get("[data-cy=SvgButton]").should("have.css", "height", svgSize);
    });
  });
});
