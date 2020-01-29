import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import lightTheme from "../components/styled/lightTheme";

// load global stylesheets
import "../node_modules/normalize.css/normalize.css";
import "../components/css/global.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
