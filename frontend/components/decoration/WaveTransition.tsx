import styled from "styled-components";

const WaveTransition = styled.div<{ url: string }>`
  width: 100%;
  height: 30px;
  background-image: url("${props => props.url}");
`;

export default WaveTransition;
