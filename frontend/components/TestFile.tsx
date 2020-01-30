import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: red;
  color: blue;
`;

const TestButton = (props: React.HTMLProps<HTMLButtonElement>) => (
  <Button>{props.children}</Button>
);

export default TestButton;
