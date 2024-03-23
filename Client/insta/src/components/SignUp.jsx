import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import Alert from "@mui/material/Alert";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState(null);
  const [show, setShow] = useState(null);
  const handlesubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/signup", {
        email,
        password,
        fullname,
        username,
      });
      // window.location.href = "/success";
      if (response.status === 201 || 200) {
        setShow(true);
        setEmail("");
        setFullname("");
        setPassword("");
        setUsername("");
      }
    } catch (err) {
      setShow(false);
      setError(err);
    }
  };

  return (
    <div className="signup">
      <img src="images.png" alt="" />
      <input
        value={email}
        type="email"
        placeholder="Email"
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <input
        value={fullname}
        type="text"
        placeholder="fullname"
        onChange={(ev) => setFullname(ev.target.value)}
      />
      <input
        value={username}
        type="text"
        placeholder="username"
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button onClick={handlesubmit}>Sign Up</button>
      {show && (
        <Alert variant="filled" severity="success">
          This is a filled success Alert.
        </Alert>
      )}
      {error && (
        <Alert variant="filled" severity="error">
          This is a filled error Alert.
        </Alert>
      )}
    </div>
  );
}

export default SignUp;
