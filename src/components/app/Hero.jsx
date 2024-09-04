import React from "react";
import image from "../../assets/display.png";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import twitter from "../../assets/icons/twitter.svg";
import discord from "../../assets/icons/discord.svg";
import download from "../../assets/icons/download-solid.svg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-center pt-16 md:gap-32  ">
      <img
        src={image}
        alt=""
        className="object-scale-down size-80 border-8 rounded-full border-[#007100] p-4"
      />
      <div className="flex flex-col text-center justify-between pt-8 items-center md:block md:text-left ">
        <p className="text-xl">Full Stack Developer</p>
        <p className="text-7xl  leading-tight font-medium">
          Hello I'm <span className=" font-medium text-[#007100]">Pratham</span>
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="flex flex-col md:flex-row gap-8  items-center pt-8">
          <div>
            <button className="flex flex-row justify-between w-52 items-center border-2 py-4 px-8 rounded-full border-[#007100]">
              <p className="text-[#007100]">Download CV</p>
              <img src={download} className="size-4" alt="" />
            </button>
          </div>

          <ul className="flex flex-row  gap-8 items-center">
            <li className="border-2 rounded-full border-[#007100] p-1">
              <img src={linkedin} alt="" className="h-[17px] w-[17px]" />
            </li>
            <li className="border-2 rounded-full border-[#007100] p-1">
              <img src={github} alt="" className="h-[17px] w-[17px]" />
            </li>
            <li className="border-2 rounded-full border-[#007100] p-1">
              <img src={twitter} alt="" className="h-[17px] w-[17px]" />
            </li>
            <li className="border-2 rounded-full border-[#007100] p-1">
              <img src={discord} alt="" className="h-[17px] w-[17px]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
