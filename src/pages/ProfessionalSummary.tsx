import React from "react";
import "../styles/ProfessionalSummary.css";
import thumbTack from "../media/images/thumbtack.png";

export const ProfessionalSummary = () => {

  const redirectToURL = (url: string): void => {
    window.location.href=url;
  }

  return (
    <>
      <div className="content professional-summary">
        <h1>Professional Summary</h1>
        <hr className="pb-6" />
        <div className="grid grid-cols-2 grid-rows-2 gap-3 pb-12">
          <figure className="bg-yellow-200 rounded-xl px-8 pb-3 pt-1">
            <blockquote>
              <img
                src={thumbTack}
                className="w-24 mx-auto pr-5"
                alt=""
              />
              <h2 className="text-3xl text-gray-900 font-semibold text-center pb-3">Work Experience</h2>
              <p className="">
                Currently, I am working as a Front-End Software Engineer in
                Princeton, New Jersey.
                <br /><br />
                Before this current position, I worked as a Website Administrator
                at the Halicioglu Data Science Institute, UC San Diego, California
                where I managed HDSI's website and web projects. Additionally I
                have also worked as an Android Developer for a small virtual
                assistant startup, where I developed the front-end application for
                the virtual assistant startup.
              </p>
            </blockquote>
          </figure>
          <figure className="bg-blue-200 rounded-xl px-8 pb-3 pt-1">
            <blockquote>
              <img
                src={thumbTack}
                className="w-24 mx-auto pr-5"
                alt=""
              />
              <h2 className="text-3xl text-gray-900 font-semibold text-center pb-3">Academic Experience</h2>
              <p className="">
                I recently graduated with my Bachelor's of Science Degree in Data
                Science from the University of California, San Diego.
                <br /><br />
                During my time at UC San Diego, I studied abroad over Summer 2019
                in Kyoto, Japan, where I spent several weeks studying Japanese
                Literature and Spirituality. I also participated in the OASIS
                Summer Bridge program, where I spent several weeks living on
                campus prior to the start of my freshman year.
              </p>
            </blockquote>
          </figure>
          <figure className="bg-pink-200 rounded-xl px-8 pb-3 pt-1">
            <blockquote>
              <img
                src={thumbTack}
                className="w-24 mx-auto pr-5"
                alt=""
              />
              <h2 className="text-3xl text-gray-900 font-semibold text-center pb-3">Volunteer Experience</h2>
              <p className="">
                Outside of the tech sector, I have also interned at a hospital in
                the Telemetry Unit, where I assisted nurses and patients in daily
                operations.
                <br /><br />
                I have also volunteered at a COVID Vaccination Super
                Site, and have also volunteered as a Poll Worker for San Diego
                County during the 2016 Presidential Elections.
              </p>
            </blockquote>
          </figure>
          <figure className="bg-green-200 rounded-xl px-8 pb-3 pt-1">
            <img
                src={thumbTack}
                className="w-24 mx-auto pr-5"
                alt=""
            />
            <h2 className="text-3xl text-gray-900 font-semibold text-center pb-3">See More</h2>
            <div>
              <button className="bg-green-600 rounded-3xl p-4 w-full mb-3">
                <span className="text-2xl text-white">Resume</span>
              </button>
              <button className="bg-linkedin rounded-3xl p-4 w-full mb-3" onClick={()=> {redirectToURL('https://www.linkedin.com/in/najeemkanishka/')}}>
                <span className="text-2xl text-white">LinkedIn</span>
              </button>
              <button className="bg-gray-600 rounded-3xl p-4 w-full mb-3" onClick={()=> {redirectToURL('https://github.com/najeemk')}}>
                <span className="text-2xl text-white">GitHub</span>
              </button>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};
