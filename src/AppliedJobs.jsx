import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Jobs from "./components/Jobs";
import FilterJobs from "./components/utilities/FilterJobs";

const AppliedJobs = () => {
  const { initialCart, products } = useLoaderData();
  const [jobs,setJobs] = useState(initialCart);
  const [filterTextValue,setFilterTextValue] = useState('all');

  let filteredJobs = jobs.filter((job) =>{
    if(filterTextValue === 'Remote'){
      return job.job_type === 'Remote';
    } else if(filterTextValue === 'Onsite'){
      return job.job_type === 'Onsite';
    } else{
      return job;
    }
  })

  function onFilterValueSelected(filterValue){
    setFilterTextValue(filterValue);
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-purple-500 mb-8 mt-6">
        Applied Jobs List
      </h1>

      <div className="ms-[1280px] mb-8">
      <FilterJobs filterValueSelected={onFilterValueSelected}></FilterJobs>
      </div>
     
      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <Jobs key={job.id} job={job}
          ></Jobs>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
