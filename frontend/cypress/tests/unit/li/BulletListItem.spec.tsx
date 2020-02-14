import React from "react";
import BulletListItem from "../../../../components/li/BulletListItem";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";

describe("BulletListItem component", function() {
  const index = 1;
  const message = "Radiation treatment";

  it("works", function() {
    // mount the component
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <BulletListItem message={message} />
        </ThemeProvider>
      ) as unknown) as Symbol
    );
    cy.contains(message);
  });
});
