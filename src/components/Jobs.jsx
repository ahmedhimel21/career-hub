import React from "react";
import {
  MapPinIcon,
  CurrencyBangladeshiIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Jobs = ({ job}) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    job_type,
    job_category,
    salary,
    location,
  } = job;
  return (
<div className="w-[1320px] h-[300px] border border-gray-200 shadow-sm mx-auto rounded-lg p-10 flex justify-between items-center">
      <img className="w-60 h-60 bg-gray-100 rounded-md shadow-md" src={company_logo} alt="" />
      <div>
        <h1 className="text-lg font-bold mb-2">{job_title}</h1>
        <p className="text-gray-500 mb-4">{company_name}</p>
        <div className="inline-flex space-x-2 mb-4">
        <p className="border-2 border-purple-500 rounded-md py-1 px-2 text-purple-500">
          {job_type}
        </p>
        <p className="border-2 border-purple-500 rounded-md py-1 px-2 text-purple-500">
          {job_category}
        </p>
      </div>
      <div className="flex space-x-2">
      <p className="flex space-x-2">
            <MapPinIcon className="h-6 w-6 text-gray-500" />
            <span>{location}</span>
          </p>
      <p className="flex space-x-2">
            <CurrencyBangladeshiIcon className="h-6 w-6 text-gray-500" />
            <span>{salary}</span>
          </p>
      </div>
      </div>
     <Link to={`/job/${id}`}>
     <button className="btn-main">View Details</button>
     </Link>
    </div>
  );
};

export default Jobs;
