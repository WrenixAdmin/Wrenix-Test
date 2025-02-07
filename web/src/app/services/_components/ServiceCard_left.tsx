import React from "react";

interface ServiceCardLeftProps {
    id: number;
    title: string;
    description: string;
}

const ServiceCard_left: React.FC<ServiceCardLeftProps> = ({ id, title, description }) => {
    return (
        <div className="flex justify-center items-center w-[60vw] gap-[3rem]">
            <div className="text-wrenixYellow text-[12rem] font-[500] text-center">
                0{id}
            </div>
            <div className="flex flex-col w-full items-start gap-[1rem]">
                <h3 className="text-wrenixBlue text-[3rem] font-[500]">
                    {title}
                </h3>
                <p className="text-wrenixGray text-[1.2rem] font-[400]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard_left;
