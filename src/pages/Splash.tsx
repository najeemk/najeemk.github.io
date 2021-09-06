import React from "react";
import "../styles/Splash.css";
import construction from "../media/construction.png";

export const Splash = () => {
  return (
    <>
      <div id="basic-page" className="content splash">
        <div>
          <h1>Najeem Kanishka</h1>
          <hr />
          <p>Software Engineer and Data Scientist</p>
          <h2
            style={{
              backgroundColor: "orange",
              color: "black",
              border: "5px solid red",
            }}
          >
            <img
              className="leading-img"
              src={construction}
              alt="construction sign"
              style={{ width: "200px" }}
            />
            This page is currently under construction.
            <br /> Please pardon any missing information!
          </h2>
        </div>
      </div>
    </>
  );
};
