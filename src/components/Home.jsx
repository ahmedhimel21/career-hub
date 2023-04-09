import React from "react";
import Lottie from "lottie-react";
import coding from "../assets/coding.json";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const Home = () => {
  const cardsData = useLoaderData();
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
        <h1 className="text-3xl text-center font-bold mb-2">Job Category List</h1>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* cards section */}
      <div className="flex justify-around mt-8">
        {
          cardsData.map((cards,idx) => <Cards key={idx} cards={cards}></Cards>)
        }
      </div>
    </>
  );
};

export default Home;
