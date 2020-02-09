import React from "react";
import SvgCircle from "../../../../components/decoration/SvgCircle";
import LightbulbIcon from "../../../../components/svg/icon/LightbulbIcon";

describe("SvgCircle component", function() {
  const size = "60px";
  const color = "rgb(129, 129, 129)";

  before(function() {
    // mount the component
    cy.mount(
      ((
        <SvgCircle
          data-cy="SvgCircle"
          size={size}
          color={color}
          svg={<LightbulbIcon data-cy="SvgElement" size="60%" />}
        />
      ) as unknown) as Symbol
    );
  });

  it("renders the svg", function() {
    // check for svg
    cy.get("[data-cy=SvgCircle]").should(
      "have.descendants",
      "[data-cy=SvgElement]"
    );
  });

  // there is an error in either styled-components || cypress
  describe.skip("props", function() {
    it("size works", function() {
      cy.get("[data-cy=SvgCircle]").should("have.css", "width", size);
      cy.get("[data-cy=SvgCircle]").should("have.css", "height", size);
    });

    it("color works", function() {
      cy.get("[data-cy=SvgCircle]").should(
        "have.css",
        "background-color",
        color
      );
    });
  });
});
