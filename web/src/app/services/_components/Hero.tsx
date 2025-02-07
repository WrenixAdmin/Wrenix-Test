import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="service_hero"
      className="flex h-[100vh] justify-center items-center"
    >
      <h2 className="text-[6.5rem] font-[500] text-center w-[70vw]">
        Your <span className="text-wrenixYellow">path</span> to <br />
        <span className="text-wrenixBlue">Digital Excellence.</span>
      </h2>
    </section>
  );
};

export default Hero;
