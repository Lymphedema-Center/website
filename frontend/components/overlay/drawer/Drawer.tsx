import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Context as AppContext } from "../../context/app/context";
import {
  toggleDrawer,
  toggleSignIn,
  toggleSignUp,
  toggleResetPass,
  toggleChangeName,
  toggleChangePass,
} from "../../context/app/actions";
import { Auth } from "aws-amplify";
import { animated } from "react-spring";
import Header from "./Header";
import Quicklink from "./Quicklink";
import TargetIcon from "../../svg/icon/TargetIcon";
import ShieldIcon from "../../svg/icon/ShieldIcon";
import NotebookIcon from "../../svg/icon/NotebookIcon";
import ActionButton from "./ActionButton";
import NameCardIcon from "../../svg/icon/NameCardIcon";
import PasswordCardIcon from "../../svg/icon/PasswordCardIcon";
import LogPostIcon from "../../svg/icon/LogPostIcon";
import SignInIcon from "../../svg/icon/SignInIcon";
import SignUpIcon from "../../svg/icon/SignUpIcon";
import SignOutIcon from "../../svg/icon/SignOutIcon";
import ResetIcon from "../../svg/icon/ResetIcon";

const DrawerView = styled(animated.div)`
  height: 100%;
  width: 85%;
  max-width: 400px;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c100};
  display: grid;
  grid-template-rows: max-content minmax(0, 1fr);
`;

//
// main content
/////////////////////////////////////////////////////////////////////////////////
const MainOverflowView = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;
const MainView = styled.div`
  display: grid;
  gap: 30px;
  padding: 15px 10px;
`;

// section title
const SectionTitle = styled.h1`
  margin: 0;
  font-size: 2em;
  color: ${(props) => props.theme.colors.text.normal};
  font-weight: 500;
`;

// quick links
const QuicklinksSection = styled.section`
  display: grid;
  gap: 10px;
`;
const SymptomsQuicklink = styled(Quicklink)`
  background-color: ${(props) => props.theme.colors.fill.brand.green};
`;
const PreventQuicklink = styled(Quicklink)`
  background-color: ${(props) => props.theme.colors.fill.brand.yellow};
`;
const LogQuicklink = styled(Quicklink)`
  background-color: ${(props) => props.theme.colors.fill.brand.salmon};
`;

// actions
const ActionsSection = styled.section`
  display: grid;
  gap: 10px;
`;
const ActionsGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Drawer = (props: {} & React.HTMLAttributes<HTMLDivElement>) => {
  const appCtx = useContext(AppContext);

  const signOut = () => {
    Auth.signOut().catch((err) => {
      console.log(err);
    });
  };

  return (
    <DrawerView {...props}>
      <Header />
      <MainOverflowView>
        <MainView>
          <QuicklinksSection>
            <SectionTitle>Quick Links</SectionTitle>
            <Link href="/symptoms-guide" passHref>
              <SymptomsQuicklink
                svg={<TargetIcon size="60%" />}
                text="Symptoms Guide"
                onClick={() => appCtx.dispatch(toggleDrawer())}
              />
            </Link>
            <Link href="/preventative-measures" passHref>
              <PreventQuicklink
                svg={<ShieldIcon size="60%" />}
                text="Preventative Measures"
                onClick={() => appCtx.dispatch(toggleDrawer())}
              />
            </Link>
            {appCtx.state.user ? (
              <Link href="/log" passHref>
                <LogQuicklink
                  svg={<NotebookIcon size="60%" />}
                  text="Personal Treatment Log"
                  onClick={() => appCtx.dispatch(toggleDrawer())}
                />
              </Link>
            ) : null}
          </QuicklinksSection>
          <ActionsSection>
            <SectionTitle>Actions</SectionTitle>
            <ActionsGrid>
              {appCtx.state.user ? (
                <>
                  <ActionButton
                    svg={<SignOutIcon size="32px" />}
                    label="Sign Out"
                    onClick={() => {
                      signOut();
                      appCtx.dispatch(toggleDrawer());
                    }}
                  />
                  <ActionButton
                    svg={<NameCardIcon size="32px" />}
                    label="Change Name"
                    onClick={() => {
                      appCtx.dispatch(toggleChangeName());
                      appCtx.dispatch(toggleDrawer());
                    }}
                  />
                  <ActionButton
                    svg={<PasswordCardIcon size="32px" />}
                    label="Change Password"
                    onClick={() => {
                      appCtx.dispatch(toggleChangePass());
                      appCtx.dispatch(toggleDrawer());
                    }}
                  />
                  <ActionButton
                    svg={<LogPostIcon size="32px" />}
                    label="Create Log"
                    onClick={() => {
                      // appCtx.dispatch(toggleSignUp());
                      appCtx.dispatch(toggleDrawer());
                    }}
                  />
                </>
              ) : (
                <>
                  <ActionButton
                    svg={<SignUpIcon size="32px" />}
                    label="Sign Up"
                    onClick={() => {
                      appCtx.dispatch(toggleSignUp());
                      appCtx.dispatch(toggleDrawer());
                    }}
                  />
                  <ActionButton
                    svg={<SignInIcon size="32px" />}
                    label="Sign In"
                    onClick={() => {
                      appCtx.dispatch(toggleSignIn());
                      appCtx.dispatch(toggleDrawer());
                    }}
                  />
                  <ActionButton
                    svg={<ResetIcon size="32px" />}
                    label="Reset Password"
                    onClick={() => {
                      appCtx.dispatch(toggleResetPass());
                      appCtx.dispatch(toggleDrawer());
                    }}
                  />
                </>
              )}
            </ActionsGrid>
          </ActionsSection>
        </MainView>
      </MainOverflowView>
    </DrawerView>
  );
};

export default Drawer;
