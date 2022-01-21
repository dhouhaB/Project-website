import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Acceil/Hero/Hero';
import JobPart from '../Acceil/Jobs/JobPart/JobPart';
import Footer from '../Acceil/Footer/Footer';
import Aboutus from '../About us/Aboutus';
import Navbar2 from '../Navbar/NavBar2';

const Home = () => {
    return (
        <div>
        <Navbar />
        <Hero/>
        <Aboutus/>
        <JobPart/>
<Footer/>
      
        </div>
    )
}

export default Home
