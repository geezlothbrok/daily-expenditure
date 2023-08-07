import React from 'react';
import resetImg from "../../images/reset.jpg";
import "./Reset.css";


function Reset() {
  return (
    <div>
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
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Confirm Enter New Password"
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <button type="submit" className="reset">
          update
        </button>
        
        
      </section>
    </div>
    </div>
    
  )
}

export default Reset