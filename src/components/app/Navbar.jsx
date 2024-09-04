import React, { useState } from "react";
import nav from "../../assets/icons/bars-solid.svg";

import Mobnav from "../app/Mobnav";


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  function handleClick() {
    setNavOpen(!navOpen);
  }
  

  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="text-4xl font-semibold  ">
        Pratham R<span className="text-[#007100] font-semibold "> .</span>
      </div>
      <ul className="hidden md:flex md:flex-row md:justify-between gap-8">
        <li className="bg-[#0D1320]">
          {" "}
          <a href={`/`}>Home</a>
        </li>
        <li>
          {" "}
          <a href={`/services`}>Services</a>
        </li>
        <li>
          {" "}
          <a href={`/resume`}>Resume</a>
        </li>
        <li>
          {" "}
          <a href={`/work`}>Work</a>
        </li>
        <li>
          {" "}
          <a href={`/contact`}>Contact</a>
        </li>
        <li>
          <a
            href={`/hire-me`}
            className="bg-[#007100] border-[2px] pt-[7px]  pb-[7px] pl-[20px] pr-[20px] rounded-full border-[#007100]"
          >
            Hire Me
          </a>
        </li>
      </ul>
      <button onClick={handleClick} className=" md:hidden">
        <img className="h-[17px] w-[17px]" src={nav} alt="" />
      </button>
    {navOpen?<Mobnav handleClick={handleClick}/>:<></>}
    </nav>
  );
};

export default Navbar;
