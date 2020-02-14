import React from "react";
import { filterProps } from "../helpers";
import styled from "styled-components";

const Container = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  gap: 10px;
`;

// bullet
const Circle = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${props => props.theme.colors.fill.grayscale.c700};
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 100px;
`;

// message
const Message = styled.p`
  font-weight: 400;
  font-size: 1.4em;
  color: ${props => props.theme.colors.text.normal};
  margin: 0;
`;

interface BulletListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /** The message of the list item. */
  message: string;
}

const BulletListItem = (props: BulletListItemProps) => (
  <Container {...filterProps(props, ["message"])}>
    <Circle />
    <Message>{props.message}</Message>
  </Container>
);

export default BulletListItem;
