import React, { useState } from 'react'
import './ProfilCard.css'
import { useSelector } from "react-redux";
import axios from "axios";
// import User from '../../../../../models/User';
import { deleteUser} from "../../JS/actions/userActions";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect, } from "react-router-dom";

import { logOut } from "../../JS/actions/userActions"

const ProfilCard = ({user}) => {
    const [verif,setVerif] = useState(true);
    const [name,setName] = useState();
    const [address,setAddress] = useState();
    const [password,setPassword] = useState();
    const [redirectNow,setRedirectNow] = useState(true);
    const [userInfo,setUserInfo] = useState({
        fullName : user.fullName,
        adress : user.adress
    })
    
    const handleClick = async () => {
        await  axios.put("api/user/" + user._id,{ fullName : name, password : password, adress : address})
        setUserInfo({
            fullName : name,
            adress : address
        })
        setVerif(true)
        
    }
  
   /* const user = useSelector((state) => state.userReducer.user);*/
   const dispatch = useDispatch();

   const handleClickdelete = async () => {
    const result = window.confirm("voulez vous supprimer ce compte ")
    if (result)
    {
     
        setRedirectNow(false)
        dispatch(logOut())
        dispatch(deleteUser(user._id))
        alert("user supprimé avec succés");
    
    }
    
}


    return (
      
        <div>
            
	{redirectNow ? <div class="card-container">

<div class="upper-container">
    <div className="image-container">
    <img src="https://cdn1.vectorstock.com/i/1000x1000/38/10/solid-purple-gradient-user-icon-web-icon-vector-23623810.jpg"  alt='image'/>
    </div>
</div>

<div className="lower-container">
    <div>
        {verif && <h3 className='dh3'>{user && userInfo.fullName}</h3>}
        {!verif && <input type="text" placeholder='New Name' onChange={(e) => setName(e.target.value)} value={name} />}
        {verif && <h4 className='dh3'>{userInfo.adress}</h4>}
        {!verif && <input type="text" placeholder='New Last Name' onChange={(e) => setAddress(e.target.value)} value={address} />}
    </div>
    <div>
        {verif && <p>{user.email}.</p>}
        {!verif && <input type="text" placeholder='New Password' onChange={(e) => setPassword(e.target.value)} value={password}  />}
    </div>

    <div>
        {verif && <a href="#" className="btn" onClick={() => setVerif(false)} >Edit profile</a>}
        {!verif && <a href="#" className="btn" onClick={handleClick} >Save</a>}
      { /*}  <button className='btn' onClick={() => dispatch(deleteUser(user._id))}>DELETE</button>*/}
<button className='btn' onClick={handleClickdelete}  > Delete</button> 




    </div>
 
 

</div>

</div> : <Redirect to="/" />}
        </div>
    )
}

export default ProfilCard
