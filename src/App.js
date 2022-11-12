import styled, { keyframes } from "styled-components";

const Emoji = styled.div`
  font-size: 12px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
`;

const RotationAnimation = keyframes`
    0% {
      border-radius: 0%;
      transform: rotate(0deg);
    }
    50% {
      border-radius:50%;
      transform: rotate(360deg);
    }
    100% {
      border-radius: 0%;
      transform: rotate(0deg);
    }
  `;

const MovingCircle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${RotationAnimation} 3s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 42px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Box bgColor="grey">
      <MovingCircle bgColor="teal">
        <Emoji>❤️</Emoji>
      </MovingCircle>
    </Box>
  );
}

export default App;
