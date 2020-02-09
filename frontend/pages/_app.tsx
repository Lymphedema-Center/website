import React from "react";
import styled from "styled-components";
import App from "next/app";
import Header from "../components/composed/Header";
import Footer from "../components/composed/Footer";
import { ThemeProvider } from "styled-components";
import lightTheme from "../components/styled/lightTheme";

// load global stylesheets
import "../node_modules/normalize.css/normalize.css";
import "../css/global.css";

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  min-height: 100%;
`;

const FixedHeader = styled(Header)`
  position: fixed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const InvisHeader = styled(Header)`
  visibility: hidden;
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={lightTheme}>
        <FixedHeader hamburgerOnClick={() => {}} />
        <PageContainer>
          <InvisHeader hamburgerOnClick={() => {}} />
          <Component {...pageProps} />
        </PageContainer>
        <Footer />
      </ThemeProvider>
    );
  }
}
