import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: red;
`;

const HomePage = () => {
  console.log(process.env.TESTER);
  return <StyledDiv>Welcome to Next.js!</StyledDiv>;
};

export default HomePage;
