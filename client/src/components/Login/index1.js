import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import './stylee.css';

const Log = ( props ) => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(true);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
      
        <ul className="ulbtnn">
        <button className="btnn"> 
          <li className ="ilbtnn"
            onClick={handleModals}
            id="register"
            className={signUpModal ? "active-btn" : null}
          >    Log out
        
          </li>
          </button>
          <button className="btnn">
          <li className ="ilbtnn"
            onClick={handleModals}
            id="login"
            className={signInModal ? "active-btn" : null}>
       Login 
          </li>
          </button>
        </ul>
        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Log;