import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import PageBanner from "../components/composed/PageBanner";
import ShieldIcon from "../components/svg/icon/ShieldIcon";
import MWC from "../components/layout/MWC";
import UnderlineTitle from "../components/decoration/UnderlineTitle";
import NumberedStepList from "../components/composed/NumberedStepList";
import StepItem from "../components/composed/StepItem";
import P from "../components/text/P";

const Container = styled.div`
  min-height: 100%;
`;

const EMWC = styled(MWC)`
  padding: 60px 0;
  display: grid;
  justify-items: center;
  gap: 30px;
`;

const ContentContainer = styled.div`
  display: grid;
  justify-items: center;
  max-width: 800px;
  gap: 10px;
`;

const CenteredP = styled(P)`
  text-align: center;
`;

const PreventativeMeasures = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <PageBanner
        svgCtr={ShieldIcon}
        color={theme.colors.fill.brand.yellow}
        message="Preventative Measures"
      />
      <EMWC>
        <ContentContainer>
          <UnderlineTitle
            color={theme.colors.fill.brand.yellow}
            message="How to treat?"
          />
          <CenteredP>
            Lymphedema can be treated long-term with CPD (complex physical
            decompression) therapy. CPD is a two part process with (1)
            decompression, and (2) maintenance:
          </CenteredP>
        </ContentContainer>
        <ContentContainer>
          <NumberedStepList index={1}>
            <StepItem>
              The first step is to keep the affected area clean.
            </StepItem>
            <StepItem>
              Next have a professional drain the lymphatic fluid from the
              affected area.
            </StepItem>
            <StepItem>
              Now a compression bandage should be immediately applied.
            </StepItem>
            <StepItem>
              Finally regularly exercising helps keep the lymphatic system
              functioning well.
            </StepItem>
          </NumberedStepList>
          <NumberedStepList index={2}>
            <StepItem>
              The first step is to keep the affected area clean.
            </StepItem>
            <StepItem>Next is lymphatic drainage.</StepItem>
            <StepItem>
              Next a compression garment, not a bandage should be applied.
            </StepItem>
            <StepItem>
              Finally regularly exercising helps keep the lymphatic system
              functioning well.
            </StepItem>
          </NumberedStepList>
        </ContentContainer>
      </EMWC>
    </Container>
  );
};

export default PreventativeMeasures;
