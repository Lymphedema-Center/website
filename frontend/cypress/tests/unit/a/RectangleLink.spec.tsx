import React from "react";
import RectangleLink from "../../../../components/a/RectangleLink";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";

describe("RectangleLink component", function() {
  const linkMessage = "View the Symptoms Guide";

  it("works", function() {
    // mount the component
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <RectangleLink>{linkMessage}</RectangleLink>
        </ThemeProvider>
      ) as unknown) as Symbol
    );
    cy.contains(linkMessage);
  });
});
