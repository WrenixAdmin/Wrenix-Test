import React from "react";
import Image from 'next/image';

import logo from '/public/logo.png'
import {MdEmail, MdNavigateNext} from "react-icons/md";

export default function ComingSoonPage() {
    return (
        <div className="flex w-screen h-screen flex-col justify-between items-center bg-white">
            <div className="flex flex-col justify-between items-center flex-1 self-stretch">
                <div className="flex px-5 py-3 justify-between items-start self-stretch">
                    <Image src={logo} alt={'logo'} width={200} height={150}/>
                    <div
                        className="flex px-2.5 py-2 items-center gap-2 rounded-full bg-[#100E34] shadow-md cursor-default">
                        <div
                            className="flex px-1 py-1 flex-col justify-center items-center gap-2.5 rounded-full bg-white">
                            <MdEmail className="text-[#100e34] text-2xl"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-white text-center font-ar-one-sans text-[1rem] font-medium leading-[0.9375rem]">
                                hello@wrenix.com
                            </p>
                            <MdNavigateNext className="text-white text-2xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}