import React from "react";
// import { getStoredCart } from './components/utilities/fakedb';
import { useLoaderData } from "react-router-dom";
import Jobs from "./components/Jobs";

const AppliedJobs = () => {
  const { initialCart, products } = useLoaderData();
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center text-purple-500">
          Applied Jobs
        </h1>
      </div>

      <div className="space-y-6 mt-10">
        {initialCart.map((job) => (
          <Jobs key={job.id} job={job}></Jobs>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
