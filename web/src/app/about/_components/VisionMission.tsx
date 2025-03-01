import React from "react";

const VisionMission: React.FC = () => {
  return (
    <div className="flex py-[4rem] w-[80vw] m-auto justify-center items-center gap-[2rem] self-stretch">
      <div className="flex flex-col max-w-[40%] justify-center items-start gap-[1.25rem]">
        <h4 className="text-[5rem] text-left text-wrenixGray font-[500] leading-none">
          We are <br /> <span className="text-wrenixBlue">Wreni</span>
          <span className="text-wrenixYellow">x,</span>
        </h4>
        <p className="self-stretch text-wrenixDarkBlue text-[1rem] font-[400]">
          dedicated to turning creative ideas into engaging digital experiences!{" "}
        </p>
        <p className="self-stretch text-wrenixDarkBlue">
          Our services include web design, web application development, digital
          marketing, and graphic design ensuring your brand shines in the
          digital world. Let’s work together to make your vision a reality!
        </p>
      </div>
      <div className="flex flex-col max-w-[60%] justify-center items-center text-center gap-[1.25rem]">
        <div className="flex flex-col p-[1.25rem] max-w-[60%] justify-center items-center gap-[0.625rem] rounded-[0.625rem] border-2 border-gray-200 bg-white">
          <h5 className="text-wrenixYellow text-[2.5rem] font-[500]">
            Mission
          </h5>
          <p className="text-wrenixDarkBlue text-[1rem] font-[400]">
            Our mission is to bring ideas to life through captivating design,
            powerful development, and unwavering quality -delivering seamless,
            future-ready solutions that tell your unique story with excellence
            at every stage.
          </p>
        </div>
        <div className="flex flex-col p-[1.25rem] max-w-[60%] justify-center items-center gap-[0.625rem] rounded-[0.625rem] border-2 border-gray-200 bg-white">
          <h5 className="text-wrenixYellow text-[2.5rem] font-[500]">Vision</h5>
          <p className="text-wrenixDarkBlue text-[1rem] font-[400]">
            To transform the digital landscape by crafting innovative,
            user-focused, and visually striking web experiences that inspire,
            connect, and empower businesses worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
