import React from "react";
import DecoratedIntro from "../../../../components/composed/DecoratedIntro";
import { ThemeProvider, ThemeConsumer } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";
import LightbulbIcon from "../../../../components/svg/icon/LightbulbIcon";

describe("Footer component", function() {
  it("works", function() {
    // mount
    cy.mount(
      ((
        <ThemeProvider theme={lightTheme}>
          <ThemeConsumer>
            {value => {
              return (
                <DecoratedIntro
                  svg={<LightbulbIcon size="60%" />}
                  color={value.colors.fill.brand.skin}
                  header="What is the Lymphedema Center?"
                  description={`
                    The Lymphedema Center is a resource to educate and help
                    people manage Lymphedema with four main focuses.`}
                />
              );
            }}
          </ThemeConsumer>
        </ThemeProvider>
      ) as unknown) as Symbol
    );
  });
});
