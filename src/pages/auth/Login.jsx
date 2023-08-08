import React, { useState } from "react";
import loginImg from "../../images/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  //LOGIN WITH GOOGLE

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="container">
        <div className="imageContainer">
          <img src={loginImg} alt="login" />
        </div>

        <form onSubmit={loginUser}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            sign in
          </button>
          <button type="button">
            <FcGoogle className="icon" onClick={signInWithGoogle} /> sign in
            with google
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
    </>
  );
}

export default Login;
