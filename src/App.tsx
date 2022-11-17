import React, { useState } from "react";

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
    <form onSubmit={onSubmit}>
      <input value={username} onChange={onChange} />
      <button>Log in</button>
    </form>
  );
};

export default App;
