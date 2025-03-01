"use client";

import React from "react";
import CountItem from "./CountItem";

const CountComponent: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[80vw] flex px-[4rem] py-[1.5rem] justify-center items-center gap-[5rem] bg-wrenixDarkBlue rounded-[2.5rem]">
        <CountItem count={10} label="Projects Completed" />
        <CountItem count={10} label="Team Members" />
        <CountItem count={1} label="Countries Served" />
        <CountItem count={10} label="happy Clients" />
      </div>
    </div>
  );
};

export default CountComponent;
