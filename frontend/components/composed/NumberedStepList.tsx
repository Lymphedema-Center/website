import React from "react";
import { filterProps } from "../helpers";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 15px;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c200};
  border-radius: 10px;
  gap: 15px;
`;

const NumberCircle = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c350};
  display: grid;
  justify-items: center;
  align-items: center;

  font-size: 36px;
  color: ${(props) => props.theme.colors.text.normal};
  font-weight: 700;
`;

const StepItemContainer = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
`;

const NumberedStepList = (
  props: { index: number } & React.HTMLAttributes<HTMLDivElement>
) => {
  return (
    <Container {...filterProps(props, ["index"])}>
      <NumberCircle>{props.index}</NumberCircle>
      <StepItemContainer>{props.children}</StepItemContainer>
    </Container>
  );
};

export default NumberedStepList;
