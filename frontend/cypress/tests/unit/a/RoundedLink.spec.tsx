import React from "react";
import RoundedLink from "../../../../components/a/RoundedLink";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";

describe("RoundedLink component", function() {
  const linkMessage = "Milroy's disease";

  it("works", function() {
    // mount the component
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <RoundedLink>{linkMessage}</RoundedLink>
        </ThemeProvider>
      ) as unknown) as Symbol
    );
    cy.contains(linkMessage);
  });
});
