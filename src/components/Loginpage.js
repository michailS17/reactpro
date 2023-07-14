// Login.js

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!email || !password) {
      setErrorMessage("Please enter email and password");
      return;
    }

    // Authenticate user
    const users = [
      {
        id: 1,
        fullName: "John Doe",
        email: "john.doe@gmail.com",
        password: "password123",
        sex: "Male",
        age: 20,
        country: "United States"
      }
      // Add other user data from the JSON file here
    ];

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Redirect to profile page
      console.log("Redirect to Profilepage");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default Login;
