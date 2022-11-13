import styled, { keyframes } from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
`;

const Emoji = styled.div`
  font-size: 12px;
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
      <Input />
      <Input />
      <Input />
    </Box>
  );
}

export default App;
