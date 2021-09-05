import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

export const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/professional-summary">Professional Summary</Link>
          </li>
          <li>
            <a href="https://linkedin.com/in/najeemkanishka">LinkedIn</a>
          </li>
          <li>
            <a href="https://najeemkanishka.com/legacy-page">Legacy Site</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
