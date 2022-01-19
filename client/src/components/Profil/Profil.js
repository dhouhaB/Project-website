import React from 'react'
import Navbar2 from '../Navbar/NavBar2'
import ProfilCard from './ProfilCard/ProfilCard';
import { useSelector } from "react-redux";
import userReducer from "../JS/reducers/userReducer";


const Profil = () => {
    const user = useSelector((state) => state.userReducer.user);

    return (
        <div>
            <Navbar2/>

<ProfilCard  user={user} />

        </div>
    )
}

export default Profil
