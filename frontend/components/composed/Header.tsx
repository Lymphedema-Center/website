import React from "react";
import Link from "next/link";
import styled from "styled-components";
import SvgButton from "../button/SvgButton";
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

const InvisSvgButton = styled(SvgButton)`
  visibility: hidden;
`;

const LogoLink = styled.a`
  height: 34px;
  cursor: pointer;
  justify-self: center;
`;
const ELymphedemaCenterLogo = styled(LymphedemaCenterLogo)`
  justify-self: center;
`;

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The function for the hamburger button. */
  hamburgerOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header = (props: HeaderProps) => (
  <Container {...props}>
    <SvgButton
      height="34px"
      width="34px"
      svg={<HamburgerIcon size="100%" />}
      aria-label="Open up the application drawer."
      onClick={props.hamburgerOnClick}
    />
    <Link href="/" passHref>
      <LogoLink aria-label="Go to the homepage.">
        <ELymphedemaCenterLogo height="34px" />
      </LogoLink>
    </Link>
    <InvisSvgButton
      height="34px"
      width="34px"
      svg={<HamburgerIcon size="100%" />}
      aria-label="HamburgerButton"
    />
  </Container>
);

export default Header;
