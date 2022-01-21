import React, { useState } from "react";
import './in.css';
import { useDispatch, useSelector } from "react-redux";
import {userLogin} from '../JS/actions/userActions';
import { Link, Redirect } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const loading = useSelector((state) => state.userReducer.loading);
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();

    dispatch(
      userLogin({
        email,
        password,
      })
    );
    
  };
 

  return isAuth ? (
    <Redirect to="/" />
  ):(
  
<>
    <div className='container-signin'>
    <div className='part3'>
    <div class="wrapper">
      <div class="title"><span>Welcome </span></div>
      <form  className="stylesh"  action="#">
        <div class="row">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Email " required value={email} onChange={(e) => setEmail(e.target.value) }
          />
        </div>
        <div class="row">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" value={password}  required onChange={(e) => setPassword(e.target.value) }  /*required*/ 
  />
        </div>
        <div class="pass"><a href="#">Forgot password?</a></div>
        <div class="row button">
        
        
        <input type="submit" value="Login" onClick={(e) => login(e)
         }
 />
                      
 
        </div>
        <div class="signup-link">Not a member?  <h6>
                        <Link to="/register-page" className="link">
                          Create Account
                        </Link>
                      </h6>
                    </div>
      </form>
    </div>
</div>
<div className='part4'>

<img src="./img/login.svg" alt="logout" className='imgDesign1'/>


</div>





    
  </div>
  </>
  )
  
}

export default SignInForm
