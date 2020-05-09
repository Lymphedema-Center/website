import React from "react";
import styled from "styled-components";
import { filterProps } from "../helpers";

const Container = styled.button<{ on: number }>`
  display: inline-block;
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  background: none;
  cursor: pointer;
  outline: none;
  transform: none;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 25px;
  width: 25px;

  & > svg {
    transform: translateY(5%);
    overflow: visible;
    fill: ${(props) =>
      props.on
        ? props.theme.colors.text.normal
        : props.theme.colors.text.placeholder};
  }

  @media (min-width: ${(props) => props.theme.layout.small.breakpoint}) {
    height: 35px;
    width: 35px;

    & > svg {
      height: 45%;
      width: 45%;
    }
  }

  &:active {
    background-color: ${(props) => props.theme.colors.fill.grayscale.c200};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.colors.fill.grayscale.c200};
    }
  }
`;

const SquareButton = (
  props: { svg: React.ReactNode; on: boolean } & React.HTMLProps<
    HTMLButtonElement
  >
) => {
  return (
    <Container {...filterProps(props, ["svg", "on"])} on={props.on ? 1 : 0}>
      {props.svg}
    </Container>
  );
};

export default SquareButton;
