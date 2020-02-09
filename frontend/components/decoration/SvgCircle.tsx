import React from "react";
import styled from "styled-components";
import { filterProps } from "../helpers";

const Container = styled.div<{ size: string; color: string }>`
  background-color: ${props =>
    props.color ? props.color : props.theme.colors.fill.grayscale.c100};
  height: ${props => (props.size ? props.size : "60px")};
  width: ${props => (props.size ? props.size : "60px")};
  border-radius: 100px;
  display: grid;
  align-items: center;
  justify-items: center;
`;

interface SvgCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Should be size in pixels, `"100px"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
  /** A svg element. */
  svg: React.ReactNode;
}

/** - Also accepts all `React.HTMLAttributes<HTMLDivElement>` props. */
const SvgCircle = (props: SvgCircleProps) => (
  <Container
    size={props.size}
    color={props.color}
    {...filterProps(props, ["size", "color", "svg"])}
  >
    {props.svg}
  </Container>
);

export default SvgCircle;
