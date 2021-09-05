import React from "react";

import { BasicPage } from "../components/BasicPage/BasicPage";

import professionalSummaryJSON from "../data/professional-summary.json";

export const ProfessionalSummary = () => (
  <BasicPage data={professionalSummaryJSON} />
);
