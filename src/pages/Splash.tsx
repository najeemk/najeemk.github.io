import React from "react";
import { BasicPage } from "../components/BasicPage/BasicPage";

import homeJSON from "../data/splash.json";
import splashImage from "../media/construction.png";

export const Splash = () => (
  <BasicPage
    data={homeJSON}
    leadingImg={{
      src: splashImage,
      alt: "Construction icon yellow",
      title:
        "Image licensed under public domain: https://creativecommons.org/publicdomain/zero/1.0/ Source: https://publicdomainvectors.org/en/free-clipart/Under-construction-vector-icon/8209.html",
    }}
  />
);
