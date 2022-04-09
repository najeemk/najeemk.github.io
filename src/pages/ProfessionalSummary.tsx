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
        <h1 className="text-5xl pb-6">Professional Summary</h1>
        <hr className="pb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-12">

          <figure className="bg-yellow-200 rounded-xl px-8 pb-3 pt-1">
            <blockquote>
              <img
                src={thumbTack}
                className="w-24 mx-auto pr-5"
                alt=""
              />
              <h2 className="text-3xl text-gray-900 font-semibold text-center pb-3">Work Experience</h2>
              <p>
                I am working as a Front-End Software Engineer for Link3D, a Materialise Company, in Princeton, New Jersey.
                <br /><br />
                I am currently working with and have considerable experience in <strong>JavaScript, React and AngularJS</strong>. 
                As I am originally from a Data Science background, I also have a considerable amount of experience working with <strong>Python</strong> and Python libraries such as Pandas, NumPy, and Scikit-learn. 
                In my studies, I have also gained a large degree of familiarity with other languages and tools such as Java, Matlab, and R.
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

          <div className="grid grid-rows-2 gap-3">
            <figure className="bg-blue-200 rounded-xl px-8 pb-3 pt-1">
              <blockquote>
                <img
                  src={thumbTack}
                  className="w-24 mx-auto pr-5"
                  alt=""
                />
                <h2 className="text-3xl text-gray-900 font-semibold text-center pb-3">Academic Experience</h2>
                <p>
                  I recently graduated with my Bachelor's of Science in <strong>Data Science</strong> from the University of California, San Diego.
                  <br /><br />
                  During my time at UC San Diego, I studied abroad over Summer 2019 in Kyoto, Japan, where I spent several weeks studying Japanese Religions, Literature, and Spirituality.
                  <br /><br /> 
                  I also participated in the OASIS Summer Bridge program, where I spent several weeks studying on campus prior to the start of my freshman year.
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
                <p>
                  Most of my volunteering experience has been primarily in the medical sector. I interned at a Tri-City Medical Center in
                  the Telemetry Unit, where I assisted the nurses and patient management and daily administrative operations. 
                  I also volunteered as an administrative assistant at a Sharp Health Vaccination Super Site.
                  <br /><br />
                  Outside of the medical sector, I have volunteered in several enviornmental cleanup projects, including beach and lagoon cleanups. 
                  I was also volunteered as an election worker for San Diego County during the 2016 Presidential Elections.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>

      </div>
    </>
  );
};
