import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import {userRegister} from "../JS/actions/userActions";
import { Link, useHistory } from "react-router-dom";



import Navbar from '../Navbar/Navbar';



import './up.css'
import Footer from '../Acceil/Footer/Footer';

const SignUpForm = () => {
  const history = useHistory();


const [fullName, setFullName] = useState("")
const [adress, setAdress] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
  const dispatch = useDispatch();


const addUser = () => {


  const newUser = {
    fullName,
    adress,
    email,
    password,
  };






if (fullName==="" || adress === "" || email ==="" || password === "") return alert("data missing");


dispatch(userRegister(newUser));
console.log("hello")
history.push("/login-page");

setFullName("");
setAdress("");
setPassword("");
setEmail ("");



};

    return (
      <>
      <Navbar/>
     
                <div class="container-signup">
      <div className='part1'>
    <div class="wrapper">
      <div class="title"><span>Create  account </span></div>
      <form  className="stylesh" action="#">
      <div class="row">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Full Name" required value={fullName} onChange={(e)=>setFullName(e.target.value)} />
        </div>
       
        <div class="row">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="LastName" required value={adress}  onChange={(e)=>setAdress(e.target.value)}   />
        </div>
        <div class="row">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Email " required value={email}  onChange={(e)=>setEmail(e.target.value)}   /> 
        </div>
        <div class="row">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password"  minlength="8"  value ={password} required onChange={(e)=>setPassword(e.target.value)}  />
        </div>
        <div class="row button">
          <input type="submit" value="Register"   onClick={() => addUser()} />
        </div>
  
     -

      </form>
    </div>
  </div>

<div className='part2'>
<img src="./img/signup.svg" alt="logout" className='imgDesign'/>

</div>
</div>

<Footer></Footer>
</>



        
    )
}

export default SignUpForm
