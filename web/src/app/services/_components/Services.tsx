import React from "react";
import ServicesList from "./ServiceList";


const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex gap-[3rem]  pb-[5rem] w-[70vw] m-auto justify-center items-center flex-col">
      <ServicesList />
    </div>
  );
};

export default Services;
