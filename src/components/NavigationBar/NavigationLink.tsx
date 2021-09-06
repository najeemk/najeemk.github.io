import { NavLink } from "react-router-dom";
import React from "react";

type NavigationLinkType = {
  to: string;
  title: string;
  left?: boolean;
  disabled?: boolean;
};

export const NavigationLink = (props: NavigationLinkType) => (
  <>
    <div />
    {props.disabled ? null : (
      <li className={props.left ? "left" : undefined}>
        <NavLink
          exact
          to={props.to}
          activeStyle={{ color: "white", fontWeight: "bold" }}
        >
          {props.title}
        </NavLink>
      </li>
    )}
  </>
);
