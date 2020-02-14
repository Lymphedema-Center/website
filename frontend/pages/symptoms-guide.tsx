import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import MWC from "../components/layout/MWC";
import PageBanner from "../components/composed/PageBanner";
import TargetIcon from "../components/svg/icon/TargetIcon";

const Container = styled.div``;

const SymptomsGuide = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <PageBanner
        color={theme.colors.fill.brand.green}
        svgCtr={TargetIcon}
        message="Symptoms Guide"
      />
    </Container>
  );
};

export default SymptomsGuide;
