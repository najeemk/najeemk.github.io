import React from "react";
import "../styles/ProfessionalSummary.css";

export const ProfessionalSummary = () => {
  return (
    <>
      <div id="basic-page" className="content professional-summary">
        <h1 className="page-header">Professional Summary</h1>
        <div>
          <div className="card">
            <h2 className="card-header">Work Experience</h2>
            <p className="card-container">
              Currently, I am working as a Front-End Software Engineer in
              Princeton, New Jersey.
            </p>
            <p className="card-container">
              Before this current position, I worked as a Website Administrator
              at the Halicioglu Data Science Institute, UC San Diego, California
              where I managed HDSI's website and web projects. Additionally I
              have also worked as an Android Developer for a small virtual
              assistant startup, where I developed the front-end application for
              the virtual assistant startup.
            </p>
          </div>
          <div className="card">
            <h2 className="card-header">Academic Experience</h2>
            <p className="card-container">
              I recently graduated with my Bachelor’s of Science Degree in Data
              Science from the University of California, San Diego.
            </p>
            <p className="card-container">
              During my time at UC San Diego, I studied abroad over Summer 2019
              in Kyoto, Japan, where I spent several weeks studying Japanese
              Literature and Spirituality. I also participated in the OASIS
              Summer Bridge program, where I spent several weeks living on
              campus prior to the start of my freshman year.
            </p>
          </div>
          <div className="card">
            <h2 className="card-header">Volunteering Experience</h2>
            <p className="card-container">
              Outside of the tech sector, I have also interned at a hospital in
              the Telemetry Unit, where I assisted nurses and patients in daily
              operations. I have also volunteered at a COVID Vaccination Super
              Site, and have also volunteered as a Poll Worker for San Diego
              County during the 2016 Presidential Elections.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
