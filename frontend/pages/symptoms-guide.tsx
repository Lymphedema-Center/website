import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import MWC from "../components/layout/MWC";
import PageBanner from "../components/composed/PageBanner";
import TargetIcon from "../components/svg/icon/TargetIcon";
import UnderlineTitle from "../components/decoration/UnderlineTitle";
import P from "../components/text/P";
import LymphedemaLeg from "../components/svg/graphic/LymphedemaLeg";
import LymphaticSystem from "../components/svg/graphic/LymphaticSystem";
import H2 from "../components/text/H2";
import RoundedLink from "../components/a/RoundedLink";
import BulletListItem from "../components/li/BulletListItem";

const Container = styled.div``;

// shared
const CenteredP = styled(P)`
  text-align: center;
`;
const ContentContainer = styled.div`
  display: grid;
  justify-items: center;
  max-width: 800px;
  gap: 10px;
`;
const UnorderedList = styled.ul`
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

// Lymphedema Section
const LymphedemaMWC = styled(MWC)`
  padding: 60px 0;
  display: grid;
  justify-items: center;
  row-gap: 30px;
`;

// Causes Section
const CausesMWC = styled(MWC)`
  background-color: ${props => props.theme.colors.fill.grayscale.c200};
  padding: 60px 0;
  display: grid;
  justify-items: center;
  row-gap: 30px;
`;
const WhiteBox = styled.div`
  width: 100%;
  max-width: 800px;
  height: 350px;
  background-color: ${props => props.theme.colors.fill.grayscale.c100};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 0 10px;
`;
const WhiteBoxContent = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
`;
const WhiteBoxIntro = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
`;
const WhiteBoxP = styled(P)`
  text-align: center;
  max-width: 500px;
`;
const PrimaryLymphedemaLinksList = styled(UnorderedList)`
  justify-items: center;
`;
const SecondaryLymphedemaCausesList = styled(UnorderedList)`
  justify-items: start;
`;

// Symptoms Section
const SymptomsMWC = styled(MWC)`
  padding: 60px 0;
  display: grid;
  justify-items: center;
  row-gap: 30px;
`;
const SymptomsList = styled(UnorderedList)`
  justify-items: start;
`;

const SymptomsGuide = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <PageBanner
        color={theme.colors.fill.brand.green}
        svgCtr={TargetIcon}
        message="Symptoms Guide"
      />
      <LymphedemaMWC>
        <ContentContainer>
          <UnderlineTitle
            color={theme.colors.fill.brand.green}
            message="Lymphedema"
          />
          <CenteredP>
            Lymphedema is a condition that occurs due to swelling from excess
            lymphatic fluid just beneath the skin. Typically this swelling
            occurs in an arm or a leg, but can occur in other areas such as a
            breast, neck, or genitals.
          </CenteredP>
        </ContentContainer>
        <LymphedemaLeg height="125" width="65" />
        <ContentContainer>
          <CenteredP>
            Lymphatic fluid is transported by our body through the lymphatic
            system. When the lymph nodes or vessels that carry the lymphatic
            fluid are damaged or malformed, there is a risk of fluid build up.
          </CenteredP>
        </ContentContainer>
        <LymphaticSystem height="340" width="187" />
        <ContentContainer>
          <CenteredP>
            Lymphedema is most common in cancer patients who have had lymph
            nodes removed or damaged through their cancer treatment procedures.
            Lymph nodes coulud also be damaged through non-surgical procedures
            such as radiation therapy.
          </CenteredP>
        </ContentContainer>
      </LymphedemaMWC>
      <CausesMWC>
        <ContentContainer>
          <UnderlineTitle
            color={theme.colors.fill.brand.green}
            message="Causes"
          />
          <CenteredP>
            There are two types of lymphedema, primary lymphedema and secondary
            lymphedema.
          </CenteredP>
        </ContentContainer>
        <WhiteBox>
          <WhiteBoxContent>
            <WhiteBoxIntro>
              <H2>Primary Lymphedema</H2>
              <WhiteBoxP>
                Primary lymphedema is a rare condition caused by problems
                associated with the development of lymph vessels in the body.
              </WhiteBoxP>
            </WhiteBoxIntro>
            <PrimaryLymphedemaLinksList>
              <RoundedLink href="https://ghr.nlm.nih.gov/condition/milroy-disease">
                Milroy's disease
              </RoundedLink>
              <RoundedLink href="https://www.ncbi.nlm.nih.gov/pubmed/662482">
                Late-onset lymphedema
              </RoundedLink>
              <RoundedLink href="https://ghr.nlm.nih.gov/condition/miege-disease">
                Miege's disease
              </RoundedLink>
            </PrimaryLymphedemaLinksList>
          </WhiteBoxContent>
        </WhiteBox>
        <WhiteBox>
          <WhiteBoxContent>
            <WhiteBoxIntro>
              <H2>Secondary Lymphedema</H2>
              <WhiteBoxP>
                Secondary lymphedema is far more common than primary lymphedema.
                Secondary lymphedema is caused by a procedure that damages the
                lymph nodes or lymph vessels. Such as:
              </WhiteBoxP>
            </WhiteBoxIntro>
            <SecondaryLymphedemaCausesList>
              <BulletListItem message="Surgery" />
              <BulletListItem message="Radiation treatment" />
              <BulletListItem message="Cancer" />
              <BulletListItem message="Infection" />
            </SecondaryLymphedemaCausesList>
          </WhiteBoxContent>
        </WhiteBox>
      </CausesMWC>
      <SymptomsMWC>
        <ContentContainer>
          <UnderlineTitle
            color={theme.colors.fill.brand.green}
            message="Symptoms"
          />
          <CenteredP>
            The signs and symptoms of lymphedema occuring in the affected arm or
            leg are:
          </CenteredP>
        </ContentContainer>
        <SymptomsList>
          <BulletListItem message="Swelling in arm or leg" />
          <BulletListItem message="Restricted range of motion" />
          <BulletListItem message="Aching or discomfort" />
          <BulletListItem message="Hardening and thickening of the skin" />
        </SymptomsList>
        <ContentContainer>
          <CenteredP>
            The swelling caused by lymphedema can range from slightly noticable
            to a condition severe enough that use of the limb is restricted.
            Lymphedema caused by cancer may not occur for months or even years
            after treatement so it is important to frequently check for
            symptoms.
          </CenteredP>
        </ContentContainer>
      </SymptomsMWC>
    </Container>
  );
};

export default SymptomsGuide;
