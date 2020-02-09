import React from "react";
import Header from "../../../../components/composed/Header";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";

describe("Header component", function() {
  it("hamburgerOnClick maps to hamburger button", function() {
    // register spy
    const spy = {
      foo() {}
    };
    cy.spy(spy, "foo").as("foo");

    // mount
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <Header
            hamburgerOnClick={() => {
              spy.foo();
            }}
          />
        </ThemeProvider>
      ) as unknown) as Symbol
    );

    // test spy
    cy.get("@foo").should("have.been.called");
  });
});
