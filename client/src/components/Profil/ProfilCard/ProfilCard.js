import React from 'react'
import './ProfilCard.css'
const ProfilCard = () => {
    return (
        <div>
            
	<div class="card-container">

<div class="upper-container">
    <div className="image-container">
    <img src="https://cdn1.vectorstock.com/i/1000x1000/38/10/solid-purple-gradient-user-icon-web-icon-vector-23623810.jpg"  alt='image'/>
    </div>
</div>

<div className="lower-container">
    <div>
        <h3 className='dh3'>Alaina Wick</h3>
        <h4 className='dh3'>Front-end Developer</h4>
    </div>
    <div>
        <p>sodales accumsan ligula. Aenean sed diam tristique, fermentum mi nec, ornare arcu.</p>
    </div>
    <div>
        <a href="#" className="btn">Edit profile</a>
    </div>
</div>

</div>
        </div>
    )
}

export default ProfilCard
