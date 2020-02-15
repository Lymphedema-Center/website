import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import MWC from "../components/layout/MWC";
import PageBanner from "../components/composed/PageBanner";
import TargetIcon from "../components/svg/icon/TargetIcon";
import UnderlineTitle from "../components/decoration/UnderlineTitle";
import P from "../components/text/P";
import LymphedemaLeg from "../components/svg/graphic/LymphedemaLeg";
import LymphaticSystem from "../components/svg/graphic/LymphaticSystem";

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

// Lymphedema Section
const LymphedemaMWC = styled(MWC)`
  padding: 60px 0;
  display: grid;
  justify-items: center;
  gap: 30px;
`;

// Causes Section
const CausesMWC = styled(MWC)`
  background-color: ${props => props.theme.colors.fill.grayscale.c200};
  padding: 60px 0;
  display: grid;
  justify-items: center;
  gap: 30px;
`;
const FlatModal = styled.div`
  width: 100%;
  max-width: 800px;
  height: 350px;
  background-color: ${props => props.theme.colors.fill.grayscale.c100};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
        <FlatModal></FlatModal>
        <FlatModal></FlatModal>
      </CausesMWC>
    </Container>
  );
};

export default SymptomsGuide;
