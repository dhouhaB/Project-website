import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import { Link, Redirect} from "react-router-dom";
import { useSelector } from "react-redux";

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const isAuth = useSelector((state) => state.userReducer.isAuth);

    return (
        <div className='navbar-navbar'>
            <div className='container-navbar'>
                <h1><span><BsFillHouseFill />Jo</span>bs</h1>

                {!isAuth && <Link to="/login-page" className="link">
                <button id="btt" className='btn'  >Sign In</button> </Link>}
                {isAuth && <Link to="/profile-page" className="link">
                <button id="btt" className='btn'  >My Profil</button> </Link>}
                {/* <Link to="/login-page" className="link">
                <button id="btt" className='btn'  >{isAuth ? "My Profil" : "Sign In"}</button> </Link> */}
                <ul id="ddul" className={click ? 'nav-menu active' : 'nav-menu'}>
              
   <Link to="/Home" className="link">
                    <li><a href='#'>Home</a></li>
                        </Link>


   



                    
                        <Link to="/contact-page" className="link">
                        <li><a href='#'>Contact</a></li>
                        </Link>


                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar