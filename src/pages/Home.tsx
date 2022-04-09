import React from "react";
import "../styles/Home.css";
import profilePicture from "../media/profile.jpg";

export const Home = () => {
  return (
    <>
      <div className="content splash">
        <div>
          <h2 className="text-3xl text-white text-center"><em>Hello, I am</em></h2>
          <h1 className="pt-0 pb-6 text-6xl">Najeem Kanishka</h1>
          <hr className="pb-6"/>
          <div className="text-3xl text-white text-center pt-1">
              Software Engineer, Nature Enthusiast, and Travel Fanatic
          </div>
          <h2 className="text-2xl text-white text-center pt-1">
            New York City Metropolitan Area
          </h2>
        </div>
      </div>
    </>
  );
};
