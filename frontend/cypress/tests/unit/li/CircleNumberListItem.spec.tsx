import React from "react";
import CircleNumberListItem from "../../../../components/li/CircleNumberListItem";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";

describe("CircleNumberListItem component", function() {
  const index = 1;
  const message = "Symptoms Guide";

  it("works", function() {
    // mount the component
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <CircleNumberListItem index={index} message={message} />
        </ThemeProvider>
      ) as unknown) as Symbol
    );
    cy.contains(message);
  });
});
