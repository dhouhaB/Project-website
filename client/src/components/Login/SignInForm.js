import React from 'react';
import './in.css'

const SignInForm = () => {
  return (
    <div className='container'>
    <div className='part3'>
    <div class="wrapper">
      <div class="title"><span>Welcome </span></div>
      <form  className="stylesh"  action="#">
        <div class="row">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Email " required/>
        </div>
        <div class="row">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" required/>
        </div>
        <div class="pass"><a href="#">Forgot password?</a></div>
        <div class="row button">
          <input type="submit" value="Login"/>
        </div>
        <div class="signup-link">Not a member? <a href="#">Signup now</a></div>
      </form>
    </div>
</div>
<div className='part4'>

<img src="./img/login.svg" alt="logout" className='imgDesign1'/>


</div>





    
  </div>
  )
}

export default SignInForm
