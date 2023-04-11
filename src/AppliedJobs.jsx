import React, { useState } from "react";
// import { getStoredCart } from './components/utilities/fakedb';
import { useLoaderData } from "react-router-dom";
import Jobs from "./components/Jobs";

const AppliedJobs = () => {
  const { initialCart, products } = useLoaderData();
  // const [job,setJob] = useState(initialCart);

  // const filterRemoteJobs = (data,property) =>{

  //   // console.log(data,property);
  //   // let newVal = data.map((curElem) =>{
  //   //   return curElem[property];
  //   // });
  //   // console.log(newVal);
  // }

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-purple-500 mb-8 mt-6">
        Applied Jobs List
      </h1>
      <div className="ms-[1095px] mb-5">
        <button  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Filter Remote Jobs
          </span>
        </button>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Filter Onsite Jobs
          </span>
        </button>
      </div>
      <div className="space-y-6">
        {initialCart.map((job) => (
          <Jobs key={job.id} job={job}
          ></Jobs>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
