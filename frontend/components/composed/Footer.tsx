import React from "react";
import styled from "styled-components";
import TheUofILogo from "../svg/brand/TheUofILogo";

const Container = styled.footer`
  height: 100px;
  width: 100%;
  background-color: ${props => props.theme.colors.fill.grayscale.c600};
  display: grid;
  align-items: center;
  justify-items: center;
`;

/** - Also accepts all `React.HTMLAttributes<HTMLDivElement>` props. */
const Footer = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <Container {...props}>
    <TheUofILogo />
  </Container>
);

export default Footer;
