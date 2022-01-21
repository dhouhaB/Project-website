import React from 'react'

import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from "react-router-dom";

const JobCard = (props) => {
    return (
 
        <div className="term">
        <dt>
     
          <span className="propstitle">{props.title}</span>
        </dt>
        <dd>{props.description}</dd>
        <dd>{props.field}</dd>
        <Link to="/postuler" className="link">
        <button className='btn-postuler'>Postuler</button>
                        </Link>
      </div>
        
    )
}

export default JobCard


