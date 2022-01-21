import React,{useState} from 'react';
//import './JobPart.css';
import JobList from '../JobList/JobList';

import JobCard from '../JobCard/JobCard';
 
import data from './data';
const Jobpartt = () => {
    const [jobs, setjobs] = useState(data)
    const addjob = (newJob)=>
    {
      return setjobs([...jobs,newJob]);
    };
    

  return <div>



<JobList jobs={jobs}/>



  </div>;
};

export default Jobpartt;
