import React from "react";
import Navbar from "./components/app/Navbar";
import up from "./assets/icons/arrow-up-solid.svg";
import right from "./assets/icons/arrow-right-solid.svg";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "UI/UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Logo Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "SEO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  return (
    <div className="container mx-auto h-full md:h-screen px-8 md:px-60 text-white pt-8 bg-[#0D1317]">
      <Navbar />
      <div className="py-16 flex flex-col md:grid md:grid-cols-2  gap-16 ">
        {services.map((service, index) => (
          <section className="border-b pb-8" key={index}>
            <div className="flex flex-row justify-between ">
              <h1 className="text-4xl font-semibold">0{index + 1}</h1>
              <img src={up} className="size-8" alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-semibold py-4">{service.title}</h1>
              <p >{service.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
