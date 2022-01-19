import React from 'react';
import {Form, FormLabel ,button} from "react-bootstrap";

import './Postuler.css'

const Postuele = () => {
  return <div className='containerPostuler'>
<Form className="design-postuler">


<FormLabel id="post1" className="formpostuler" >Pour Postuler a cete offre entrer votre Cv  </FormLabel>




<input type="file"/>


<FormLabel id= "post2" className="formpostuler" >Entrer votre Cv </FormLabel>
<input type="file"></input>
<br/>
<button>Submit </button>

</Form>
<div className="imgPostuler">
<img src="https://media2.giphy.com/media/ViHhSE1jgb30BbNebF/200w.gif" alt="image"/>
</div>




  </div>;
};

export default Postuele;
