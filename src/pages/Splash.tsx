import React from "react";
import "../styles/Splash.css";
import profilePicture from "../media/profile.jpg";

export const Splash = () => {
  return (
    <>
      <div className="content splash">
        <div>
          <h1>Najeem Kanishka</h1>
          <hr />
          <h2 className="text-xl text-white text-center pt-1">
            Software Development Engineer
            <br />
            New Jersey, USA
          </h2>
          <img
            className="leading-img profile"
            src={profilePicture}
            alt={"Najeem Headshot"}
          />
        </div>
      </div>
    </>
  );
};
