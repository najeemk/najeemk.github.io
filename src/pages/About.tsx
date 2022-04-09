import React from "react";
import "../styles/About.css";
import profilePicture from "../media/profile1.jpg";

export const About = () => {
  return (
    <>
      <div className="content about">
        <h1 className="text-5xl pb-6">About</h1>
        <hr className="pb-6" />
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
          <div>
            <img
              className="leading-img profile"
              src={profilePicture}
              alt={"Najeem Headshot"}
            />
          </div>
          <div>
            <p className="text-xl text-white text-center pb-5">
              Hello! My name is Najeem Kanishka, and I am a Junior Front-End Software Engineer at Materialise NV. 
              I have also recently graduated with a B.S. in Data Science (Spring 2021) from UC San Diego. 
            </p>
            <p className="text-xl text-white text-center pb-5">
            I love to go and explore New York City as well as all the little towns and hidden gems that the East Coast has to offer. 
            I also love to build little side projects, whether it be a homelab, or some sort of web app to solve some problem that I didn't know I even had!
            </p>
            <p className="text-xl text-white text-center pb-5">
              I have caught the travel bug and love to go on all sorts of trips, whether it be a spontaneous day trip to Atlanta, or backpacking across Western Europe.
              I have spent extended periods of time traveling around in France and Japan, and have visted over a dozen other countries from (almost) all the
              continents.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
