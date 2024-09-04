import React from "react";

export const Experience = () => {
  const experiences = {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    jobs: [
      {
        jobId: 1,
        duration: "2022-present",
        jobTitle: "developer",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        jobId: 2,
        duration: "2022-present",
        jobTitle: "developer",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        jobId: 3,
        duration: "2022-present",
        jobTitle: "developer",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        jobId: 4,
        duration: "2022-present",
        jobTitle: "developer",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        jobId: 5,
        duration: "2022-present",
        jobTitle: "developer",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
    ],
  };

  return (
    <div className="py-16">
      <h1 className="text-4xl font-semibold">My Expirience</h1>
      <p className="py-8">{experiences.description}</p>
      <ul className="flex flex-col md:grid md:grid-cols-2  gap-4">
        {experiences.jobs.map((job, i) => (
          <li key={i} className="p-8 bg-[#1a2226] rounded ">
            <h1 className="py-1">{job.duration}</h1>
            <h1 className="font-semibold py-1">{job.jobTitle}</h1>
            <p className="flex flex-row gap-2 items-start ">
              <span className=" text-[#007100] font-bold text-2xl">.</span>{" "}
              <p className="text-xs">{job.jobDescription}</p>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
