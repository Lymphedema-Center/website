import TestButton from "../../components/TestFile";
import React from "react";

describe("Button component", () => {
  it("works", () => {
    // mount the component under test
    cy.mount(
      ((<TestButton>This is a Button!</TestButton>) as unknown) as Symbol
    );
    // start testing!
    cy.contains("This is a Button!");
  });
});
