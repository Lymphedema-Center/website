import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Context as AppContext } from "../../context/app/context";
import { toggleDrawer } from "../../context/app/actions";
import { animated } from "react-spring";
import Header from "./Header";
import Quicklink from "./Quicklink";
import TargetIcon from "../../svg/icon/TargetIcon";
import ShieldIcon from "../../svg/icon/ShieldIcon";
import NotebookIcon from "../../svg/icon/NotebookIcon";
import ActionButton from "./ActionButton";
import NameCardIcon from "../../svg/icon/NameCardIcon";
import PasswordCardIcon from "../../svg/icon/PasswordCardIcon";
import ForumPostIcon from "../../svg/icon/ForumPostIcon";
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

  return (
    <DrawerView {...props}>
      <Header closefn={() => appCtx.dispatch(toggleDrawer())} />
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
            <Link href="/log" passHref>
              <LogQuicklink
                svg={<NotebookIcon size="60%" />}
                text="Personal Treatment Log"
                onClick={() => appCtx.dispatch(toggleDrawer())}
              />
            </Link>
          </QuicklinksSection>
          <ActionsSection>
            <SectionTitle>Actions</SectionTitle>
            <ActionsGrid></ActionsGrid>
          </ActionsSection>
        </MainView>
      </MainOverflowView>
    </DrawerView>
  );
};

export default Drawer;
