import React from "react";
import styled from "styled-components";
import { filterProps } from "../../helpers";

const AspectRatioBox = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

const ActionButtonView = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  padding: 10px;
  margin: 0;
  text-decoration: none;
  background: none;
  cursor: pointer;
  outline: none;
  transform: none;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c300};
  border-radius: 5px;
  cursor: pointer;

  & > svg {
    height: 32px;
    width: 32px;
  }

  &:active {
    box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
    }
  }
`;

const TextLabel = styled.p`
  margin: 0;
  font-size: 1.4em;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.normal};
`;

const ActionButton = (
  props: { svg: React.ReactNode; label: string } & React.HTMLProps<
    HTMLButtonElement
  >
) => {
  return (
    <AspectRatioBox {...filterProps(props, ["svg", "label", "onClick"])}>
      <ActionButtonView onClick={props.onClick}>{props.svg}</ActionButtonView>
      <TextLabel>{props.label}</TextLabel>
    </AspectRatioBox>
  );
};

export default ActionButton;
