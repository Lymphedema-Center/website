import React from "react";
import DecoratedIntro from "../../../../components/composed/DecoratedIntro";
import { ThemeProvider, ThemeConsumer } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";
import LightbulbIcon from "../../../../components/svg/icon/LightbulbIcon";

describe("DecoratedIntro component", function() {
  const header = "What is the Lymphedema Center?";
  const description =
    "The Lymphedema Center is a resource to educate" +
    " and help people manage Lymphedema with four main focuses.";

  before(function() {
    // mount
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <ThemeConsumer>
            {value => {
              return (
                <DecoratedIntro
                  data-cy="DecoratedIntro"
                  svg={<LightbulbIcon data-cy="SvgElement" size="60%" />}
                  color={value.colors.fill.brand.skin}
                  header={header}
                  description={description}
                />
              );
            }}
          </ThemeConsumer>
        </ThemeProvider>
      ) as unknown) as Symbol
    );
  });

  it("works", function() {
    cy.get("[data-cy=DecoratedIntro]").should(
      "have.descendants",
      "[data-cy=SvgElement]"
    );
    cy.contains(header);
    cy.contains(description);
  });
});
