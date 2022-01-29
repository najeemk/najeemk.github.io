import React from "react";
import "../styles/About.css";
import profilePicture from "../media/profile.jpg";

export const About = () => {
  return (
    <>
      <div className="content about">
        <h1>About</h1>
        <hr className="pb-6" />
        <img
          className="leading-img profile"
          src={profilePicture}
          alt={"Najeem Headshot"}
        />
      </div>
    </>
  );
};
