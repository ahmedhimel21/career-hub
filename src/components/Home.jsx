import React from "react";
import Lottie from "lottie-react";
import coding from "../assets/coding.json";

const Home = () => {
  return (
    <>
      <div className="lg:flex justify-around items-center">
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
    </>
  );
};

export default Home;
