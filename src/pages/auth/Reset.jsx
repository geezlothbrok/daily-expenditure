import React, { useState } from 'react';
import resetImg from "../../images/reset.jpg";
import "./Reset.css";
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import Loader from '../../components/loader/Loader';



function Reset() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState();

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true)
    sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false);
   toast.success("Please check your email for a reset link")
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });

  };
  return (
    <>
    {isLoading && < Loader />}
    
         <div className="container">
      <div className="imageContainer">
        <img src={resetImg} alt="reset" />
      </div>

      <section>
        <h2>reset password</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email Here..."
          required
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          inputMode="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="reset" onClick={resetPassword}>
          update
        </button>
        
        
      </section>
    </div>
    
    </>
  )
}

export default Reset