import React from "react";
import styled from "styled-components";
import { filterProps } from "../helpers";
import SvgCircle from "../decoration/SvgCircle";
import H1 from "../text/H1";
import P from "../text/P";

const Container = styled.div`
  display: grid;
  justify-items: center;
  gap: 10px;
  max-width: 500px;
`;

const CenteredH1 = styled(H1)`
  text-align: center;
`;
const CenteredP = styled(P)`
  text-align: center;
`;

interface DecoratedIntroProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The `background-color` for the `SvgCircle`. */
  color?: string;
  /** A svg element. */
  svg: React.ReactNode;
  /** The title. */
  header: string;
  /** The description. */
  description: string;
}

/** - Also accepts all `React.HTMLAttributes<HTMLDivElement>` props. */
const DecoratedIntro = (props: DecoratedIntroProps) => (
  <Container {...filterProps(props, ["color", "svg"])}>
    <SvgCircle size="60px" color={props.color} svg={props.svg} />
    <CenteredH1>{props.header}</CenteredH1>
    <CenteredP>{props.description}</CenteredP>
  </Container>
);

export default DecoratedIntro;
