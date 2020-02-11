import React from "react";
import PageBanner from "../../../../components/composed/PageBanner";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../../../components/styled/lightTheme";
import LightbulbIcon from "../../../../components/svg/icon/LightbulbIcon";

describe("PageBanner component", function() {
  describe("props", function() {
    const message = "Symptoms Guide";
    const color = "rgb(0, 0, 255)";

    before(function() {
      // mount
      cy.mount(
        ((
          <ThemeProvider theme={lightTheme}>
            <PageBanner
              data-cy="PageBanner"
              svgCtr={LightbulbIcon}
              color={color}
              message={message}
            />
          </ThemeProvider>
        ) as unknown) as Symbol
      );
    });

    it("message works", function() {
      cy.contains("Symptoms Guide");
    });

    it.skip("color works", function() {
      cy.get("[data-cy=PageBanner]").should(
        "have.css",
        "background-color",
        color
      );
    });

    it("svgCtr renders", function() {
      cy.get("[data-cy=PageBanner] div > div > svg");
    });
  });
});
