import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import DecoratedIntro from "../../components/composed/DecoratedIntro";
import LightbulbIcon from "../../components/svg/icon/LightbulbIcon";
import { ThemeProvider, ThemeConsumer } from "styled-components";
import lightTheme from "../../components/styled/lightTheme";

export default {
  title: "composed/DecoratedIntro",
  parameters: {
    componentSubtitle: "A decorated intro."
  },
  component: DecoratedIntro,
  decorators: [withA11y]
};

export const normal = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <ThemeConsumer>
        {value => {
          return (
            <DecoratedIntro
              svg={<LightbulbIcon size="60%" />}
              color={value.colors.fill.brand.skin}
              header="What is the Lymphedema Center?"
              description={
                "The Lymphedema Center is a resource to educate and help" +
                " people manage Lymphedema with four main focuses."
              }
            />
          );
        }}
      </ThemeConsumer>
    </ThemeProvider>
  );
};
