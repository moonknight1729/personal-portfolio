import React from "react";
import close from "../../assets/icons/window-close-solid.svg";

const Mobnav = ({ handleClick }) => {
  return (
    <div className="flex flex-col items-center bg-[#0D1320] h-screen w-[300px] z-99 fixed top-0 right-0">
     
      <button onClick={handleClick} className="basis-1/6 h-[17px] m-8 w-[17px] self-end">
        <img
          
          src={close}
          alt=""
        />
      </button>

      <div className="basis-1/6 text-4xl font-semibold  ">
        Pratham R<span className="text-[#007100] font-semibold "> .</span>
      </div>

      <ul className="flex flex-col gap-6 basis-2/3 bg-[#0D1320]">
        <li className="bg-[#0D1320]">
          {" "}
          <a href={`/`}>Home</a>
        </li>
        <li className="bg-[#0D1320]">
          {" "}
          <a href={`/services`}>Services</a>
        </li>
        <li className="bg-[#0D1320]">
          {" "}
          <a href={`/resume`}>Resume</a>
        </li>
        <li className="bg-[#0D1320]">
          {" "}
          <a href={`/work`}>Work</a>
        </li>
        <li className="bg-[#0D1320]">
          {" "}
          <a href={`/contact`}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Mobnav;
