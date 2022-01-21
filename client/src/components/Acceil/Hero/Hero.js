
import {AiOutlineSearch} from 'react-icons/ai'
import React ,{useState}from "react";

import './Hero.css'

const Hero = () => {
    const [filterByName, setFilterByName] = useState("");

    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find your future Job</h1>
                <p className='search-text'>Your Dreamm Job is waiting </p>
                {/* <form className='search'>

                    <div>
                    
                       <input type='text' placeholder='Enter Keyword..'           onChange={(e) => setFilterByName(e.target.value) }/>
                    </div>
                   
                </form> */}
            </div>
        </div>
    )
}

export default Hero