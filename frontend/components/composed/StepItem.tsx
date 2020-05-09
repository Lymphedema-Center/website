import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.fill.grayscale.c100};
  height: 70px;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
`;

const P = styled.p`
  margin: 0;
  font-size: 1.4em;
  color: ${(props) => props.theme.colors.text.normal};
`;

const StepItem = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Container {...props}>
      <P>{props.children}</P>
    </Container>
  );
};

export default StepItem;
