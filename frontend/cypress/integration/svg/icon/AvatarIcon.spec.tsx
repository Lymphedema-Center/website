import React from "react";
import styled from "styled-components";
import AvatarIcon from "../../../../components/svg/icon/AvatarIcon";

// create 48x48 avatar icon
const EAvatarIcon = styled(AvatarIcon)`
  height: 48px;
  width: 48px;
`;

describe("AvatarIcon component", () => {
  it("mounts", () => {
    // mount the component
    cy.mount(((<EAvatarIcon />) as unknown) as Symbol);
  });
});
