import React from "react";
import WaveTransition from "../../../../components/decoration/WaveTransition";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";

describe("WaveTransition component", function() {
  it("works", function() {
    // mount
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <WaveTransition url="test-url" />
        </ThemeProvider>
      ) as unknown) as Symbol
    );
  });
});
