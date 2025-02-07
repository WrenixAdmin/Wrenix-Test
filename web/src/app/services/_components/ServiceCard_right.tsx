import React from "react";

interface ServiceCardRightProps {
    id: number;
    title: string;
    description: string;
}

const ServiceCard_right: React.FC<ServiceCardRightProps> = ({ id, title, description }) => {
    return (
        <div className="flex justify-center items-center w-[60vw] gap-[3rem]">
            <div className="flex flex-col text-right w-full items-start gap-[1rem]">
                <h3 className="text-wrenixBlue w-full text-[3rem] font-[500]">
                    {title}
                </h3>
                <p className="text-wrenixGray w-full text-[1.2rem] font-[400]">
                    {description}
                </p>
            </div>
            <div className="text-wrenixYellow text-[12rem] font-[500] text-center">
                0{id}
            </div>
        </div>
    );
};

export default ServiceCard_right;
