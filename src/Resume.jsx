import React from "react";
import Navbar from "./components/app/Navbar";
import { useState } from "react";
import Experience from "./components/resume/Experience";
import Education from "./components/resume/Education";
import Skills from "./components/resume/Skills";
import Aboutme from "./components/resume/Aboutme";

const Resume = () => {
  const [component, setComponent] = useState(1);
  return (
    <div className="container mx-auto h-full md:h-screen px-8 md:px-60 text-white pt-8 bg-[#0D1317]">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center md:items-start  justify-between">
        <div className="py-16 w-full flex flex-col items-center md:items-start  h-full">
          <button
            onClick={() => {
              setComponent(1);
            }}
            className="bg-[#1a2226] mb-4 p-4 w-4/5 md:w-80 text-center rounded"
          >
            Experience
          </button>

          <button
            onClick={() => {
              setComponent(2);
            }}
            className="bg-[#1a2226] mb-4 p-4 w-4/5 md:w-80 text-center rounded"
          >
            Education
          </button>

          <button
            onClick={() => {
              setComponent(3);
            }}
            className="bg-[#1a2226] mb-4 p-4 w-4/5 md:w-80 text-center rounded"
          >
            Skills
          </button>

          <button
            onClick={() => {
              setComponent(4);
            }}
            className="bg-[#1a2226] mb-4 p-4 w-4/5 md:w-80 text-center rounded"
          >
            About me
          </button>
        </div>

        {component === 1 ? (
          <Experience />
        ) : component === 2 ? (
          <Education />
        ) : component === 3 ? (
          <Skills />
        ) : component === 4 ? (
          <Aboutme />
        ) : (
          <Experience />
        )}
      </div>
    </div>
  );
};

export default Resume;
