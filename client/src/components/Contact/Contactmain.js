import React from 'react'
import Navbar from '../Navbar/Navbar'
import ContactContain from './ContactContain'
import { Link, Redirect } from "react-router-dom";
import './ContactContain.css'
import Navbar2 from '../Navbar/NavBar2';

const Contactmain = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <ContactContain/>
        </div>
    )
}

export default Contactmain
