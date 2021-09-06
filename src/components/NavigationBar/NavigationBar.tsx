import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { NavigationLink } from "./NavigationLink";

export const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul id="navigation">
          <NavigationLink to="/" title="Najeem Kanishka" left={true} />
          {/* Reverse Order */}
          <NavigationLink to="/contact" title="Contact" />
          <NavigationLink to="/summary" title="Professional Summary" />
          <NavigationLink to="/about" title="About" disabled={true} />
        </ul>
      </nav>
    </div>
  );
};
