import React from "react";
import styled from "styled-components";
import H1 from "../text/H1";

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content;
  justify-items: center;
  gap: 10px;
`;

const CenteredH1 = styled(H1)`
  text-align: center;
`;

const Underline = styled.div<{ color: string }>`
  height: 5px;
  width: 45px;
  background-color: ${props => props.color};
  border-radius: 10px;
`;

interface UnderlineTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The color of the underline, must be a css compliant string `#434343`. */
  color: string;
  /** The title text.*/
  message: string;
}

const UnderlineTitle = (props: UnderlineTitleProps) => (
  <Container {...props}>
    <CenteredH1>{props.message}</CenteredH1>
    <Underline color={props.color} />
  </Container>
);

export default UnderlineTitle;
