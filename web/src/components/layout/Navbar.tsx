import Image from "next/image";
import React from "react";
import Link from "next/link";

import Logo from "/public/logo/wrenix_logo.png";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

const Navbar: React.FC = () => {  
  return (
    <div className="w-screen px-[2rem] py-[1rem] flex items-center justify-between bg-transparent backdrop-blur-sm fixed">
      <Link href={"/"}>
        <Image src={Logo} alt="Wrenix logo" width={150} />
      </Link>
      <nav className="flex py-[1rem] px-[2rem] justify-center items-center gap-[2rem] rounded-[6rem] bg-[#100e34] shadow-[2px_6px_4px_0px_rgba(0,0,0,0.25)] text-white text-center  font-ar-one-sans text-[1rem] font-medium">
        <Link href={"/about"}>About Us</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/join-us"}>Careers</Link>
        <Link href={"/contact-us"}>Contact Us</Link>
      </nav>
      <nav className="flex gap-[0.5rem] text-[#100E34]">
        <Link
          href={"/login"}
          className="flex justicy-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
        >
          <FaFacebook />
        </Link>
        <Link
          href={"/login"}
          className="flex justicy-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
        >
          <FaInstagram />
        </Link>
        <Link
          href={"/login"}
          className="flex justicy-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
        >
          <FaLinkedin />
        </Link>
        <Link
          href={"/login"}
          className="flex justicy-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
        >
          <FaYoutube />
        </Link>
        <Link
          href={"/login"}
          className="flex justicy-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
        >
          <FaTiktok />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
