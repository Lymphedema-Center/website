import React from "react";
import MWC from "../../../../components/layout/MWC";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";

describe("MWC component", function() {
  it("works", function() {
    // mount
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <MWC />
        </ThemeProvider>
      ) as unknown) as Symbol
    );
  });
});
