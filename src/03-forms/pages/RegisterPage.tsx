import React, { useState, ChangeEvent } from "react";
import "../styles/styles.css";

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "Cristian",
    email: "c@gmail.com",
    password1: "123456",
    password2: "123456",
  });

  const { name, email, password1, password2 } = registerData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form action="">
        <input
          type="text"
          name="Name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password1"
          id="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
