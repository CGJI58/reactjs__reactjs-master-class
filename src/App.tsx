import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  background-color: ${(props) => props.theme.bgColor};
`;

const App = () => {
  const [username, setUsername] = useState<string>("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Welcome! ${username}`);
  };

  return (
    <Form onSubmit={onSubmit}>
      <input value={username} onChange={onChange} />
      <button>Log in</button>
    </Form>
  );
};

export default App;
