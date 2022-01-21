import React from 'react';
import JobCard from '../JobCard/JobCard';
import '../JobPart/JobPart.css'
const JobList = (props) => {
  return <div className="joblist">
  {props.jobs.map((job,i)=><JobCard job={job}  key={i} />)}

</div>;
};

export default JobList;


 
    