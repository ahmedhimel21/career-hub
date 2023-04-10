import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import coding from "../assets/coding.json";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  
  const handleShowAll = () =>{
    setShowAll(true);
  }
  const cardsData = useLoaderData();
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    fetch("companyData.json")
      .then((res) => res.json())
      .then((data) => setFeaturedData(data));
  }, []);

  return (
    <>
      {/* banner section */}
      <div className="lg:flex justify-around items-center mt-36">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            <span>One Step</span> <br />
            <span>Closer To</span> <br />
            <span className="text-purple-500">Your Dream Job</span>
          </h1>
          <p className="mb-8">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className="btn-main">Get started</button>
        </div>
        <div>
          <Lottie animationData={coding} loop={true} />
        </div>
      </div>
      {/* job category list title */}
      <div className="mt-32">
        <h1 className="text-3xl text-center font-bold mb-2">
          Job Category List
        </h1>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* cards section */}
      <div className="flex justify-around mt-8">
        {cardsData.map((cards, idx) => (
          <Cards key={idx} cards={cards}></Cards>
        ))}
      </div>
      {/* featured job section */}
      <div className="mt-32">
        <h1 className="text-2xl font-bold mb-2 text-center">Featured Jobs</h1>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* featured jobs cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-5 mt-8 mb-4">
        {featuredData.slice(0, showAll ? 6 : 4).map((companyData) => (
          <FeaturedJobs
            key={companyData.id}
            companyData={companyData}
          ></FeaturedJobs>
        ))}
      </div>
      {
        !showAll && (<span className="text-center mt-10" onClick={handleShowAll}>
          <button className="btn-main">See All Jobs</button>
        </span>)
      }
    </>
  );
};

export default Home;
