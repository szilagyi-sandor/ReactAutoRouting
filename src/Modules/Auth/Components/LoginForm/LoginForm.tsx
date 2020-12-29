import React, { useState } from "react";

import "./LoginForm.scss";

import { findMockedUser } from "Modules/Auth/mock";
import { LoginFormProps } from "./interfaces";

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);

  return (
    <form
      className="loginForm"
      onSubmit={(e) => {
        e.preventDefault();
        const user = findMockedUser(loginData.username, loginData.password);
        if (!user) {
          setError(true);
          return;
        }

        onSubmit(user);
      }}
    >
      <div className="inner">
        <div className="inputWrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginData.username}
            onChange={(e) => {
              setLoginData({ ...loginData, username: e.target.value });
            }}
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="password"
            value={loginData.password}
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
          />
        </div>

        <div className="btnWrapper">
          <button type="submit">Login</button>
        </div>

        {error && <p className="error">Invalid username or password</p>}
      </div>
    </form>
  );
}
