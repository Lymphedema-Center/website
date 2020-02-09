import React from "react";
import styled from "styled-components";

const Container = styled.a`
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.fill.colors.red};
  font-weight: 400;
  font-size: 1.4em;
  color: ${props => props.theme.colors.text.normal};
  margin: 0;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
    }
  }
`;

const RectangleLink = (props: React.HTMLAttributes<HTMLAnchorElement>) => (
  <Container {...props}>{props.children}</Container>
);

export default RectangleLink;
