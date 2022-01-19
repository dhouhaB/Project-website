import React, { useState } from 'react'

import './JobPart.css';


import JobCard from '../JobCard/JobCard';
 
import data from './data';















  function createJobCard(datas) {
   
    return (
        
      <JobCard
        key={datas.id}
        photo={datas.photo}
        title={datas.title}
        description={datas.description}
        field={datas.field}
      />
      
    );
  }











const JobPart = (filterByName) => {


    return (
        <div className='jobpartdesign'>
        <h1>
          {/* <span className='ddd'>Offers</span>*/}
        </h1>
       
      
<dl id="SettingScrole" className="dictionary">{data.map(createJobCard)}</dl>
 
        













        
      </div>
    )
}

export default JobPart
