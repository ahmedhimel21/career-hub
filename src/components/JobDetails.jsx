import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyBangladeshiIcon,
  BriefcaseIcon,
  PhoneIcon,
  InboxStackIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "./utilities/fakedb";


const JobDetails = () => {
  const dynamic = useParams();
  const [job, setJob] = useState({});
  const data = useLoaderData();

  const handleApplyNow = (id) => {
    addToDb(id);
  };

  useEffect(() => {
    const exist = data.find((singleData) => singleData.id == dynamic.id);
    if (exist) {
      setJob(exist);
    }
  }, []);
  const {
    id,
    job_description,
    job_responsibility,
    education_requirements,
    experiences,
    salary,
    job_title,
    location,
    phone,
    email,
  } = job;
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold text-purple-500">
          Job Details
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-32 mt-16">
        <div>
          <p className="mb-6">
            <span className="text-lg font-semibold">Job Description: </span>
            <span>{job_description}</span>
          </p>
          <p className="mb-6">
            <span className="text-md font-bold">Job Responsibility: </span>
            <span>{job_responsibility}</span>
          </p>
          <p className="mb-6">
            <span className="text-md font-bold mb-4">
              Education Requirements:{" "}
            </span>
            <br />
            <span>{education_requirements}</span>
          </p>
          <p>
            <span className="text-md font-bold mb-4">Experience</span> <br />
            <span>{experiences}</span>
          </p>
        </div>

        <div className="p-8 bg-purple-50 rounded-lg w-[424px] h-[421px] mb-6">
          <h1 className="text-lg font-bold mb-6">Job Details</h1>{" "}
          <hr className="mb-6" />
          <p className="flex mb-4 space-x-2">
            <CurrencyBangladeshiIcon className="h-6 w-6 text-purple-400" />
            <span className="text-md font-bold">Salary:</span>
            <span>{salary} (Per Month)</span>
          </p>
          <p className="flex mb-8 space-x-2">
            <BriefcaseIcon className="h-6 w-6 text-purple-400" />
            <span className="text-md font-bold">Job Title:</span>
            <span>{job_title}</span>
          </p>
          <h1 className="text-lg font-bold mb-6">Contact Information</h1>
          <hr className="mb-6" />
          <p className="flex mb-4 space-x-2">
            <PhoneIcon className="h-6 w-6 text-purple-400" />
            <span className="text-md font-bold">Phone:</span>
            <span>{phone}</span>
          </p>
          <p className="flex mb-4 space-x-2">
            <InboxStackIcon className="h-6 w-6 text-purple-400" />
            <span className="text-md font-bold">email:</span>
            <span>{email}</span>
          </p>
          <p className="flex space-x-2">
            <MapPinIcon className="h-6 w-6 text-purple-400" />
            <span className="text-md font-bold">Address:</span>
            <span>{location}</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => handleApplyNow(id)}
        className="btn-main w-[425px] h-16 lg:ms-[780px]"
      >
        Apply Now
      </button>
    </>
  );
};

export default JobDetails;
