"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-[80vw] m-auto min-h-screen">
      <h2 className="text-[4rem] md:text-[6.25rem] font-[500] text-wrenixGray leading-none text-center">
        We don<span className="text-wrenixYellow">'</span>t<br/> just think.<br/>
        <span className="text-wrenixBlue">We do.</span>
      </h2>
    </div>
  );
}
