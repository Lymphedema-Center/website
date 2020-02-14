import React from "react";
import UnderlineTitle from "../../../../components/decoration/UnderlineTitle";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";

describe("WaveTransition component", function() {
  it("works", function() {
    // mount
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <UnderlineTitle
            data-cy="UnderlineTitle"
            message="Lymphedema"
            color="blue"
          />
        </ThemeProvider>
      ) as unknown) as Symbol
    );
  });

  describe("props", function() {
    const message = "What is the Lymphedema Center?";
    const color = "rgb(0, 0, 255)";

    before(function() {
      // mount
      cy.mount(
        ((
          <ThemeProvider theme={lightTheme}>
            <UnderlineTitle
              data-cy="UnderlineTitle"
              message={message}
              color={color}
            />
          </ThemeProvider>
        ) as unknown) as Symbol
      );
    });

    it("title works", function() {
      cy.contains(message);
    });

    // there is an error with Cypress here
    it.skip("color works", function() {
      cy.get("[data-cy=UnderlineTitle] > div").should(
        "have.css",
        "background-color",
        color
      );
    });
  });
});
