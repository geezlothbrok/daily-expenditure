import React from 'react';
import loginImg from "../../images/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./Login.css"

function Login() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={loginImg} alt="login" />
      </div>

      <form>
        <h2>login</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Here..."
          required
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          inputMode="email"
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <button type="submit" className="btn btn-primary">
          sign in
        </button>
        <button type="button">
          <FcGoogle className="icon" /> sign in with google
        </button>
        <span className="links">
          <Link to="/reset" id="linkText">
            Forgot Password?
          </Link>
          <Link to="/register" id="linkText">
            Create an Account
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Login