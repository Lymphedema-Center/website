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
  height: 34px;
  width: 34px;
  background-color: ${props => props.theme.colors.fill.grayscale.c200};
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 100px;
`;
const Number = styled.p`
  font-weight: 600;
  font-size: 2em;
  color: ${props => props.theme.colors.text.normal};
  margin: 0;
`;

// message
const Message = styled.p`
  font-weight: 400;
  font-size: 1.4em;
  color: ${props => props.theme.colors.text.normal};
  margin: 0;
`;

interface CircleNumberListItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  /** The index of the list item. */
  index: number;
  /** The message of the list item. */
  message: string;
}

const CircleNumberListItem = (props: CircleNumberListItemProps) => (
  <Container {...filterProps(props, ["index", "message"])}>
    <Circle>
      <Number>{props.index}</Number>
    </Circle>
    <Message>{props.message}</Message>
  </Container>
);

export default CircleNumberListItem;
