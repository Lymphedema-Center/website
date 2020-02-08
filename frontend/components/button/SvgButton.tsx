import React from "react";
import styled from "styled-components";
import { filterProps } from "../helpers";

const Container = styled.button<{ height: string; width: string }>`
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  outline: none;
  height: ${props => props.height};
  width: ${props => props.width};
`;

interface SvgButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** A css compliant height string, `34px`. */
  height: string;
  /** A css compliant width string, `34px`. */
  width: string;
  /** A svg element. */
  svg: React.ReactNode;
}

const SvgButton = (props: SvgButtonProps) => (
  <Container
    height={props.height}
    width={props.width}
    {...filterProps(props, ["height", "width", "svg"])}
  >
    {props.svg}
  </Container>
);

export default SvgButton;
