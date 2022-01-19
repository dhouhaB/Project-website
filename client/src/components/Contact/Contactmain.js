import React from 'react'
import Navbar from '../Navbar/Navbar'
import ContactContain from './ContactContain'
import { Link, Redirect } from "react-router-dom";
import './ContactContain.css'

const Contactmain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContactContain/>
        </div>
    )
}

export default Contactmain
