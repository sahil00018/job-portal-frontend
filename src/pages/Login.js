import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // We'll create this CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: username,
        password: password,
      });

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      alert("Login Successful ✅");
      window.location.href = "/dashboard";
    } catch (error) {
      console.log("Error:", error.response?.data);
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Job Portal Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
