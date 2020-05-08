import React from "react";
import styled from "styled-components";
import SvgCircle from "../../decoration/SvgCircle";
import SvgButton from "../../button/SvgButton";
import AvatarIcon from "../../svg/icon/AvatarIcon";
import CloseIcon from "../../svg/icon/CloseIcon";
import { filterProps } from "../../helpers";

const HeaderView = styled.div`
  background-color: ${(props) => props.theme.colors.fill.grayscale.c400};
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: 1fr 1fr;
  column-gap: 6px;
  padding: 15px 10px;
`;

// avatar
const Avatar = styled(SvgCircle)`
  background-color: ${(props) => props.theme.colors.fill.grayscale.c500};
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
`;

// name text
const BoldName = styled.p`
  margin: 0;
  font-size: 1.8em;
  color: ${(props) => props.theme.colors.text.normal};
  font-weight: 700;
`;
const FirstName = styled(BoldName)`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  align-self: end;
`;
const LastName = styled(BoldName)`
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
`;

// close button
const CloseButton = styled(SvgButton)`
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c500};
  border-radius: 100px;

  &:active {
    box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
    }
  }
`;

const Header = (
  props: {
    firstname: string;
    lastname: string;
    closefn: () => void;
  } & React.HTMLAttributes<HTMLDivElement>
) => {
  return (
    <HeaderView {...filterProps(props, ["closefn"])}>
      {props.firstname ? <Avatar svg={<AvatarIcon size="60%" />} /> : null}
      {props.firstname ? <FirstName>{props.firstname}</FirstName> : null}
      {props.lastname ? <LastName>{props.lastname}</LastName> : null}
      <CloseButton
        svg={<CloseIcon size="65%" />}
        height={"32px"}
        width={"32px"}
        onClick={props.closefn}
      />
    </HeaderView>
  );
};

export default Header;
