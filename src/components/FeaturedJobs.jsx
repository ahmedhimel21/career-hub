import React from "react";
import { MapPinIcon, CurrencyBangladeshiIcon } from "@heroicons/react/24/solid";

const FeaturedJobs = ({ companyData }) => {
  const {
    company_logo,
    company_name,
    job_title,
    job_type,
    job_category,
    location,
    salary,
  } = companyData;

  return (
    <div className="rounded-lg p-10 shadow-lg border border-gray-200">
      <img
        className="w-65 h-[100px] object-cover mb-8"
        src={company_logo}
        alt="company_logo"
      />
      <h1 className="text-2xl font-semibold mb-2">{job_title}</h1>
      <p className="mb-4 text-gray-600 text-xl">{company_name}</p>
      <div className="inline-flex space-x-2 mb-4">
        <p className="border-2 border-purple-500 rounded-md py-1 px-2 text-purple-500">
          {job_type}
        </p>
        <p className="border-2 border-purple-500 rounded-md py-1 px-2 text-purple-500">
          {job_category}
        </p>
      </div>
      <div className="flex space-x-4 mb-6">
        <p className="flex space-x-2 text-gray-500">
      <MapPinIcon className="h-6 w-6 text-gray-500" /> 
       {location}
        </p>
        <p className="flex">
        <CurrencyBangladeshiIcon className="h-6 w-6 text-gray-500" /> 
          {salary}
          </p>
      </div>
      <button className="btn-main">View Details</button>
    </div>
  );
};

export default FeaturedJobs;
