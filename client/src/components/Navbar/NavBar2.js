import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import './Navbar.css'
import { logOut } from "../JS/actions/userActions";

const Navbar2 = () => {
    const dispatch = useDispatch();

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const loading = useSelector((state) => state.userReducer.loading);

    return (
       <>
 {isAuth ? (


        
        <div className='navbar-navbar'>
            <div className='container-navbar'>
                <h1><span><BsFillHouseFill />Jo</span>bs</h1>
                <Link to="/Home" className="link">
                <button id="btt" className='btn' onClick={() => dispatch(logOut())}  >Logout</button>
                        </Link>






                <ul id="ddddul" className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link to="/Home" className="link">
                <li><a href='#'>Home</a></li></Link>

                    <li><a href='#'>About</a></li>
                    <Link to="/contact-page" className="link">
                    <li><a href='#'>Contact</a></li>
                        </Link>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>):(



 
            <div className='navbar-navbar'>
            <div className='container-navbar'>
                <h1><span><BsFillHouseFill />Jo</span>bs</h1>
                <button id="btt" className='btn'  >Sign up</button>
                <ul id="dddul" className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link to="/Home" className="link">
                <li><a href='#'>Home</a></li></Link>
              
                    <li><a href='#'>About</a></li>
                    <Link to="/contact-page" className="link">
                    <li><a href='#'>Contact</a></li>
                        </Link>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>








        )}
        </>
   
   
   )

}

export default Navbar2