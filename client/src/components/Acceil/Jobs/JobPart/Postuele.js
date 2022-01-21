import React, { useState } from 'react'
import Navbar2 from '../../../Navbar/NavBar2';
import {Form, FormLabel ,button} from "react-bootstrap";
import Footer from '../../Footer/Footer'
import Modal from 'react-modal'

import './Postuler.css'
const Postuele = () => {
 
  const [modalIsOpen, setModalIsOpen] = useState(false)





  

  

  return (

    <>
    <Navbar2/>

<div className='containerPostuler'>
<Form className="design-postuler">


<FormLabel id="post1" className="formpostuler" >Pour Postuler a cete offre entrer votre Cv  </FormLabel>




<input className='inputpostuler' type="file"/>

<br></br>
<FormLabel id= "post2" className="formpostuler" >Entrer votre Cv </FormLabel>
<br></br>
<input className='inputpostuler' type="file"></input>
<br/>
<button className="btnp"  onClick={() => setModalIsOpen(true)} >Submit </button>

<Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}

        style={{
          overlay: {
            backgroundColor: 'grey'
          },
          content: {
            color: 'blue'
          }
        }}
        // shouldCloseOnOverlayClick={false}
      >
        <h2> Postuler </h2>
        <p> Votre candidature a été envoyé avec success au recruteur</p>
        <div>
          <button className="btnp" onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>

</Form>
<div className="imgPostuler">
<img className="imp" src="https://media2.giphy.com/media/ViHhSE1jgb30BbNebF/200w.gif" alt="image"/>
</div>
</div>

</>

  )


};

export default Postuele;
