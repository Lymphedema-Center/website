import React from "react";
import styled from "styled-components";
import { filterProps } from "../helpers";
import SvgCircle from "../decoration/SvgCircle";
import H1 from "../text/H1";

const Container = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  height: 45px;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 10px 0;

  @media (min-width: ${props => props.theme.layout.tablet.breakpoint}) {
    height: 80px;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 10px;
`;
const ESvgCircle = styled(SvgCircle)`
  height: 25px;
  width: 25px;

  @media (min-width: ${props => props.theme.layout.tablet.breakpoint}) {
    height: 40px;
    width: 40px;
  }
`;
const EH1 = styled(H1)`
  font-weight: 500;
  font-size: 1.6em;
`;

interface PageBanner extends React.HTMLAttributes<HTMLDivElement> {
  /** The color of the background, `#343434`. */
  color: string;
  /** A svg component. */
  svgCtr: (props: any) => JSX.Element;
  /** The textual label/message. */
  message: string;
}

const PageBanner = (props: PageBanner) => (
  <Container {...filterProps(props, ["color", "svg"])} color={props.color}>
    <ContentContainer>
      <ESvgCircle svg={<props.svgCtr size="60%" />} size="25px" />
      <EH1>{props.message}</EH1>
    </ContentContainer>
  </Container>
);

export default PageBanner;
