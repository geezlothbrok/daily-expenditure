import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../images/signup.jpg";
import "./Login.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match!");
    };
    setIsLoading(true);


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false);
    toast.success("Registered Successfully!");
    navigate("/login");
   
  })
  .catch((error) => {
    toast.error(error.message);
    setIsLoading(false);
  });
  };
  return (
    <>
     <ToastContainer />
     {isLoading && <Loader />}
         <div className="container">
      <div className="imageContainer">
        <img src={registerImg} alt="login" />
      </div>

      <form onSubmit={registerUser}>
        <h2>sign up</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Here..."
          required
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          inputMode="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
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
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Confirm Password"
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          value={cPassword} onChange={(e) => setCPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          register
        </button>
        <button type="button">
          <FcGoogle className="icon" /> sign up with google
        </button>
        <span className="links">
          <Link to="/login" id="linkText">
            already have an account?  log in
          </Link>
          
        </span>
      </form>
    </div>
    </>
  )
}

export default Register