import React from "react";
import "../styles/styles.css";

export const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <form action="">
        <input type="text" name="Name" id="name" placeholder="Name" />
        <input type="email" name="Email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password1"
          id="password1"
          placeholder="Password"
        />
        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="Repeat Password"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
