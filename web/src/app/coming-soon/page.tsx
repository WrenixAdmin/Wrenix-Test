import React from "react";
import Image from 'next/image';

import styles from './comingSoon.module.css';

import logo from '/public/logo.png'
import {MdEmail, MdNavigateNext} from "react-icons/md";

const ComingSoonPage: React.FC = () => {
    return (
        <div
            className="flex w-screen h-screen flex-col justify-between items-center bg-white overflow-hidden pointer-events-none">
            <div className="flex flex-col justify-between items-center flex-1 self-stretch">
                <div className="flex px-5 py-3 justify-between items-start self-stretch">
                    <Image src={logo} alt={'logo'} width={200} height={150}/>
                    <div
                        className="flex px-2.5 py-2 items-center gap-2 rounded-full bg-[#100E34] shadow-md cursor-default pointer-events-none">
                        <div
                            className="flex px-1 py-1 flex-col justify-center items-center gap-2.5 rounded-full bg-white">
                            <MdEmail className="text-[#100e34] text-2xl"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-white text-center font-ar-one-sans text-[1rem] font-medium leading-[0.9375rem] pointer-events-none">
                                hello@wrenix.com
                            </p>
                            <MdNavigateNext className="text-white text-2xl"/>
                        </div>
                    </div>
                </div>
                <h1 className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-inter leading-[21.875rem] ${styles.heading}`}>
                    Wrenix
                </h1>
                <p
                    className="absolute left-[28.5rem] top-[13rem] text-[#484848] text-center font-ar-one-sans text-[5rem] font-medium leading-[3.125rem]">
                    It<span className="text-[#FFBF18]">’</span>s a New Year
                </p>
                <div
                    className="absolute right-[5rem] bottom-[6.5rem] text-[#484848] text-right font-ar-one-sans text-[3.125rem] font-medium leading-[3.125rem]">
                    We are <span className="text-[#FFBF18]">cooking</span> a<br/> <span className="text-[#4F48EC]">New Look.</span>
                </div>
            </div>
        </div>
    );
}

export default ComingSoonPage;