import styled from "styled-components";

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 1.4em;
  color: ${(props) => props.theme.colors.fill.colors.error};
`;

export default ErrorMessage;
