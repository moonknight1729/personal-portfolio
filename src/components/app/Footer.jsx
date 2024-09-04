import React from "react";

const Footer = () => {
  return (
    <div className="py-12"> 
      <ul className="flex flex-col md:flex-row gap-8 justify-between items-center">
        <li className="flex flex-row gap-4 items-center">
          <span className="text-5xl font-semibold">12</span>
          <p className="flex flex-col">
          <span>Years of</span>
          <span>experience</span> 
          </p>
          
        </li>
        
          <li className="flex flex-row gap-4 items-center  ">
          <span className="text-5xl   font-semibold">26</span>
          <p className="flex flex-col">
          <span>Projects</span>
          <span>compeleted</span> 
          </p>
          </li>
          <li className="flex flex-row gap-4 items-center ">
          <span className="text-5xl  font-semibold">18</span>
          <p className="flex flex-col">
          <span>Technologies</span>
          <span>mastered</span> 
          </p>
          </li>
          <li className="flex flex-row gap-4 items-center  ">
          <span className="text-5xl  font-semibold">500</span>
          <p className="flex flex-col">
          <span>Code</span>
          <span>commits</span> 
          </p>
          </li>
      </ul>
    </div>
  );
};

export default Footer;
