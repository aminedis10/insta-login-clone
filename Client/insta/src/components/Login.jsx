import React, { useState } from "react";
import Login2 from "./Login2";
import "./style.css";
import SignUp from "./SignUp";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";

function Login() {
  const [active, setActive] = useState("login");
  return (
    <div className="auth">
      <div className="left">
        <img src="insta.png" alt="" />
      </div>

      <div className="right">
        {active === "login" ? <Login2 /> : <SignUp />}

        <div className="more">
          {active === "login" ? (
            <span>
              Don't have an account ?{" "}
              <button onClick={() => setActive("signup")}>Sign Up</button>
            </span>
          ) : (
            <span>
              do you have an account ?{" "}
              <button onClick={() => setActive("login")}>Login</button>
            </span>
          )}
          <Button variant="outlined" startIcon={<FacebookIcon />}>
            login with facebook
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
