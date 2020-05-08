import React from "react";
import styled from "styled-components";
import { filterProps } from "../helpers";

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c150};
  padding: 5px 10px;
  border-radius: 5px;
  gap: 10px;
`;

const SvgContainer = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  background: none;
  border: none;
  outline: none;
  font-size: 1.6em;
  color: ${(props) => props.theme.colors.text.normal};
  padding: 0;
  margin: 0;
`;

const TextInput = (
  props: { svg: React.ReactNode; inputProps?: any } & React.HTMLProps<
    HTMLDivElement
  >
) => {
  return (
    <Container {...filterProps(props, ["svg", "inputProps"])}>
      <SvgContainer>{props.svg}</SvgContainer>
      <Input {...props.inputProps} />
    </Container>
  );
};

export default TextInput;
