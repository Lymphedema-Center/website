import { addParameters, addDecorator } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";
import lightTheme from "../components/styled/lightTheme";

// load css
import "../node_modules/normalize.css/normalize.css";
import "./global.css";
import "./mockNextRouter";

addDecorator(storyFn => (
  <ThemeProvider theme={lightTheme}>{storyFn()}</ThemeProvider>
));
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  backgrounds: [
    { name: "almost white", value: "#f8f8f8", default: true },
    { name: "light gray", value: "#f2f1f1" }
  ]
});
