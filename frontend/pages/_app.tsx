import React from "react";
import styled from "styled-components";
import App from "next/app";
import Header from "../components/composed/Header";
import Footer from "../components/composed/Footer";
import { ThemeProvider } from "styled-components";
import lightTheme from "../components/styled/lightTheme";
import {
  ContextProvider as AppContextProvider,
  Context as AppContext,
} from "../components/context/app/context";
import { toggleDrawer } from "../components/context/app/actions";
import Overlay from "../components/overlay/Overlay";
import Amplify from "aws-amplify";
import NotificationCenter from "../components/composed/NotificationCenter";

// configure amplify
Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: process.env.userPoolId,
    userPoolWebClientId: process.env.userPoolWebClientId,
  },
});

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
        <AppContextProvider>
          <AppContext.Consumer>
            {(value) => (
              <>
                <Overlay visible={value.state.overlay.visible} />
                <FixedHeader
                  hamburgerOnClick={() => {
                    value.dispatch(toggleDrawer());
                  }}
                  data-cy="FixedHeader"
                />
                <PageContainer>
                  <NotificationCenter />
                  <InvisHeader hamburgerOnClick={() => {}} />
                  <Component {...pageProps} />
                </PageContainer>
                <Footer />
              </>
            )}
          </AppContext.Consumer>
        </AppContextProvider>
      </ThemeProvider>
    );
  }
}
