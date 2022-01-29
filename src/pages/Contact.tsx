import React from "react";
import "../styles/Contact.css";

export const Contact = () => {
  const redirectToURL = (url: string): void => {
    window.location.href=url;
  }
  return (
    <>
      <div className="content contact">
        <h1 className="page-header">Contact Me</h1>
        <hr className="pb-6" />
        <figure className="bg-gray-800 rounded-3xl px-8 py-12">
          <h2 className="text-2xl text-white font-semibold text-center pb-10">At this moment, I can only accept communication through LinkedIn:</h2>
          <div className="flex flex-rows">
            <button className="bg-linkedin rounded-3xl p-4 w-full mx-3" onClick={()=> {redirectToURL('https://www.linkedin.com/in/najeemkanishka/')}}>
              <span className="text-2xl text-white">LinkedIn</span>
            </button>
          </div>
        </figure>
      </div>
    </>
  );
};
