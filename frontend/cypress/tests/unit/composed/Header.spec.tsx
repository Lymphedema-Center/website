import React from "react";
import Header from "../../../../components/composed/Header";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";
import "../../../mockNextRouter";

describe("Header component", function() {
  it("hamburgerOnClick maps to hamburger button", function() {
    // mount
    cy.mount(
      <ThemeProvider theme={lightTheme}>
        <Header hamburgerOnClick={() => {}} />
      </ThemeProvider>
    );
  });
});
