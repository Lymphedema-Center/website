import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import MWC from "../components/layout/MWC";
import DecoratedIntro from "../components/composed/DecoratedIntro";
import LightbulbIcon from "../components/svg/icon/LightbulbIcon";
import CircleNumberListItem from "../components/li/CircleNumberListItem";
import WaveTransition from "../components/decoration/WaveTransition";
import TargetIcon from "../components/svg/icon/TargetIcon";
import RectangleLink from "../components/a/RectangleLink";
import Link from "next/link";
import ShieldIcon from "../components/svg/icon/ShieldIcon";
import DialogIcon from "../components/svg/icon/DialogIcon";
import NotebookIcon from "../components/svg/icon/NotebookIcon";
import { scrollToTop } from "../components/helpers";

const Container = styled.div``;

// shared
const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 60px;
  display: grid;
  justify-items: center;
`;
const SpacedRectangleLink = styled(RectangleLink)`
  margin-top: 50px;
`;

// What is the Lymphedema Center?
/////////////////////////////////////////////////////////////////////
const IntroMWC = styled(MWC)``;
const IntroSection = styled(Section)`
  padding: 60px 0;
`;

const OrderedList = styled.ol`
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

// Symptoms Guide
/////////////////////////////////////////////////////////////////////
const SymptomsGuideMWC = styled(MWC)`
  background-color: ${(props) => props.theme.colors.fill.brand.green};
`;
const SymptomsGuideSection = styled(Section)``;

// Preventative Measures
/////////////////////////////////////////////////////////////////////
const PreventativeMeasuresMWC = styled(MWC)`
  background-color: ${(props) => props.theme.colors.fill.brand.yellow};
`;
const PreventativeMeasuresSection = styled(Section)``;

/*
// Community Forums
/////////////////////////////////////////////////////////////////////
const CommunityForumsMWC = styled(MWC)`
  background-color: ${(props) => props.theme.colors.fill.brand.pink};
`;
const CommunityForumsSection = styled(Section)``;
*/

// Personal Treatment Log
/////////////////////////////////////////////////////////////////////
const PersonalLogMWC = styled(MWC)`
  background-color: ${(props) => props.theme.colors.fill.brand.salmon};
`;
const PersonalLogSection = styled(Section)``;

const HomePage = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <IntroMWC>
        <IntroSection>
          <DecoratedIntro
            svg={<LightbulbIcon size="60%" />}
            color={theme.colors.fill.brand.skin}
            header="What is the Lymphedema Center?"
            description={
              "The Lymphedema Center is a resource to educate and help" +
              " people manage Lymphedema with three main focuses."
            }
          />
          <OrderedList>
            <CircleNumberListItem index={1} message="Symptoms Guide" />
            <CircleNumberListItem index={2} message="Preventative Measures" />
            <CircleNumberListItem index={3} message="Personal Treatment Log" />
          </OrderedList>
        </IntroSection>
      </IntroMWC>
      <WaveTransition url="/background/green-transition.png" />
      <SymptomsGuideMWC>
        <SymptomsGuideSection>
          <DecoratedIntro
            svg={<TargetIcon size="60%" />}
            header="Symptoms Guide"
            description={
              "The symptoms guide will explain what Lymphedema is, what the" +
              " causes of lymphedema are, and the signs & symptoms of" +
              " lymphedema to watch out for."
            }
          />
          <Link href="/symptoms-guide" passHref>
            <SpacedRectangleLink onClick={scrollToTop}>
              View the Symptoms Guide
            </SpacedRectangleLink>
          </Link>
        </SymptomsGuideSection>
      </SymptomsGuideMWC>
      <WaveTransition url="/background/yellow-transition.png" />
      <PreventativeMeasuresMWC>
        <PreventativeMeasuresSection>
          <DecoratedIntro
            svg={<ShieldIcon size="60%" />}
            header="Preventative Measures"
            description={
              "As lymphatic fluid accumulates, swelling can cause damage to" +
              " the body. Here we provide battle tested methods to control" +
              " swelling and prevent damage."
            }
          />
          <Link href="/preventative-measures" passHref>
            <SpacedRectangleLink onClick={scrollToTop}>
              View the Preventative Measures
            </SpacedRectangleLink>
          </Link>
        </PreventativeMeasuresSection>
      </PreventativeMeasuresMWC>
      {/*
      <WaveTransition url="/background/pink-transition.png" />
      <CommunityForumsMWC>
        <CommunityForumsSection>
          <DecoratedIntro
            svg={<DialogIcon size="60%" />}
            header="Community Forums"
            description={
              "The community forums are a place to ask questions, post " +
              " pictures, and learn from a community of prople."
            }
          />
          <Link href="/forums" passHref>
            <SpacedRectangleLink onClick={scrollToTop}>
              View the Community Forums
            </SpacedRectangleLink>
          </Link>
        </CommunityForumsSection>
      </CommunityForumsMWC>
      */}
      <WaveTransition url="/background/salmon-transition.png" />
      <PersonalLogMWC>
        <PersonalLogSection>
          <DecoratedIntro
            svg={<NotebookIcon size="60%" />}
            header="Personal Treatment Log"
            description={
              "The Lymphedema Center also provides a free personal treatment" +
              " log. Here you can record your notes and even before and after" +
              " photos."
            }
          />
          <Link href="/log" passHref>
            <SpacedRectangleLink onClick={scrollToTop}>
              View my Treatment Log
            </SpacedRectangleLink>
          </Link>
        </PersonalLogSection>
      </PersonalLogMWC>
    </Container>
  );
};

export default HomePage;
