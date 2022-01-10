import React from 'react'

import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const JobCard = (props) => {
    return (
 
        <div className="term">
        <dt>
     
          <span className="propstitle">{props.title}</span>
        </dt>
        <dd>{props.description}</dd>
        <dd>{props.field}</dd>
        <button className='btn-postuler'>Postuler</button>
      </div>
        
    )
}

export default JobCard


