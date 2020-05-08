import styled from "styled-components";

const FormSubmitButton = styled.button`
  display: inline-block;
  border: none;
  padding: 5px 10px;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.fill.brand.skin};
  outline: none;
  transform: none;
  border-radius: 5px;
  font-size: 1.6em;
  height: 40px;

  &:active {
    box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default FormSubmitButton;
