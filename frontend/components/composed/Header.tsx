import React from "react";
import styled from "styled-components";
import HamburgerIcon from "../svg/icon/HamburgerIcon";
import LymphedemaCenterLogo from "../svg/brand/LymphedemaCenterLogo";

const Container = styled.header`
  background-color: ${props => props.theme.colors.fill.grayscale.c600};
  height: 60px;
  width: 100%;
  padding: 0 ${props => props.theme.layout.small.margin};
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
`;

const HamburgerButton = styled.button`
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  outline: none;
  height: 34px;
  width: 34px;
`;

const InvisHamburgerButton = styled(HamburgerButton)`
  visibility: hidden;
`;

const ELymphedemaCenterLogo = styled(LymphedemaCenterLogo)`
  justify-self: center;
`;

const Header = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <Container {...props}>
    <HamburgerButton aria-label="HamburgerButton">
      <HamburgerIcon size="34px" />
    </HamburgerButton>
    <ELymphedemaCenterLogo height="34px" />
    <InvisHamburgerButton>
      <HamburgerIcon size="34px" />
    </InvisHamburgerButton>
  </Container>
);

export default Header;
