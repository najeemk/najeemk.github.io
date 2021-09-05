import React from "react";

import { BasicPage } from "../components/BasicPage/BasicPage";

import aboutJSON from "../data/about.json";
import profilePicture from "../media/profile.jpg";

export const About = () => (
  <BasicPage
    data={aboutJSON}
    leadingImg={{
      src: profilePicture,
      alt: "Headshot of Najeem",
      profile: true,
    }}
  />
);
