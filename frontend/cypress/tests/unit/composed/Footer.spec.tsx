import React from "react";
import Footer from "../../../../components/composed/Footer";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";
import "../../../mockNextRouter";

describe("Footer component", function() {
  it("works", function() {
    // mount
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <Footer />
        </ThemeProvider>
      ) as unknown) as Symbol
    );
  });
});
