"use client";

import React from "react";
import Lottie from "lottie-react";

// Importing the animations
import DigitalMarketing from "../../../../public/animation/DigitalMarketing.json";
import GraphicDesign from "../../../../public/animation/GraphicDesigning.json";
import MobileDevelopment from "../../../../public/animation/MobileDevelopment.json";
import WebDesign from "../../../../public/animation/UIUX.json";
import WebDevelopment from "../../../../public/animation/WebDevelopment.json";

const AboutHero: React.FC = () => {
  return (
    <section className="about-hero h-screen relative z-0 py-[5rem]">
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-[35%]">
        <h2 className="text-wrenixGray text-center text-[6.5rem] font-[500] leading-[6.5rem]">
          Your All-in-One. <br /> <span className="text-wrenixBlue">Web </span>
          <span className="text-wrenixYellow">Partner</span> <br />{" "}
          <span className="text-[6rem] italic">Forever.</span>
        </h2>
      </div>
      <div className="flex items-end justify-between w-[90%] m-auto h-full">
        <div className="flex w-[16rem] h-[28rem] py-5 px-3 flex-col justify-end gap-10 items-center rounded-[0.625rem] bg-white shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)]">
          {/* The Video */}
          <Lottie
            animationData={MobileDevelopment}
            loop={true}
            className="w-64 h-64"
          />
          <h6 className="text-wrenixDarkBlue text-[1.5rem] font-[500]">
            Mobile Application Development
          </h6>
        </div>
        <div className="flex w-[18rem] h-[24rem] py-5 px-3 flex-col justify-between items-center rounded-[0.625rem] bg-white shadow-[-2px_2px_4px_0px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)]">
          {/* The Video */}
          <Lottie
            animationData={WebDesign}
            loop={true}
            className="w-64 h-64"
          />
          <h6 className="text-wrenixDarkBlue text-[1.5rem] font-[500]">
            UI/UX Design
          </h6>
        </div>
        <div className="flex w-[25rem] h-[20rem] py-5 px-3 flex-col justify-end items-center rounded-[0.625rem] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)]">
          {/* The Video */}
          <Lottie
            animationData={WebDevelopment}
            loop={true}
            className="w-64 h-64"
          />
          <h6 className="text-wrenixDarkBlue text-[1.5rem] font-[500]">
            Web Design & Development
          </h6>
        </div>
        <div className="flex w-[18rem] h-[24rem] py-5 px-3 flex-col justify-between items-center rounded-[0.625rem] bg-white shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)]">
          {/* The Video */}
          <Lottie
            animationData={DigitalMarketing}
            loop={true}
            className="w-64 h-64"
          />
          <h6 className="text-wrenixDarkBlue text-[1.5rem] font-[500]">
            Digital Marketing
          </h6>
        </div>
        <div className="flex w-[16rem] h-[28rem] py-5 px-3 flex-col gap-10 justify-end items-center rounded-[0.625rem] bg-white shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)]">
          {/* The Video */}
          <Lottie
            animationData={GraphicDesign}
            loop={true}
            className="w-64 h-64"
          />
          <h6 className="text-wrenixDarkBlue text-[1.5rem] font-[500]">
            Graphic Designing
          </h6>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
