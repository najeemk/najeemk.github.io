import React from "react";

import logo from "../media/logo.svg";
import "../styles/App.css";

export const Home = () => {
  return (
    <>
      <div className="App text-center">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React with Tailwind CSS</p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
};
