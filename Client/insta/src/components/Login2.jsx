import React, { useState } from "react";
import "./login2.css";
import axios from "axios";
import Alert from "@mui/material/Alert";

function Login2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handlesubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      // window.location.href = "/success";
      if (token) {
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className="login">
      <img src="images.png" alt="" />
      <input
        type="email"
        placeholder="Email"
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button onClick={handlesubmit}>Login</button>
      {error && (
        <Alert variant="filled" severity="error">
          {error.response.data.message}
        </Alert>
      )}
    </div>
  );
}

export default Login2;
