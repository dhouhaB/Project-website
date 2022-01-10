import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find your future Job</h1>
                <p className='search-text'>Your Dreamm Job is waiting </p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder='Enter Keyword..' />
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default Hero