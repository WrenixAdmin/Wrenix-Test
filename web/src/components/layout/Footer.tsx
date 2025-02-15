import Link from "next/link";
import Image from "next/image";

import { IoLanguage } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

import Logo from "/public/logo/wrenix_logo.png";
import FooterIcon from "@/components/util/FooterIcon";

export default function Footer() {
  return (
    <footer
      className={`w-full pt-[1.5rem] pb-[1rem] px-[3rem] transition-all duration-300 rounded-t-[2rem] bg-[#d5d4e7]`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="cursor-default flex items-center space-x-2 bg-white border rounded-full px-4 py-2">
          <IoLanguage className="text-2xl" />
          <span className="text-lg">English</span>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image src={Logo} alt={"Wrenix Logo"} width={250} height={300} />
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm font-inter">
            <Link
              href="/about"
              className="transition-all duration-300 hover:font-bold"
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="transition-all duration-300 hover:font-bold"
            >
              Our Projects
            </Link>
            <Link
              href="/"
              className="transition-all duration-300 hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="transition-all duration-300 hover:font-bold"
            >
              Our Services
            </Link>
            <Link
              href="/join-us"
              className="transition-all duration-300 hover:font-bold"
            >
              Join Us
            </Link>
          </div>
        </div>
        <Link href="/contactUs">
          <div className="cursor-pointer flex items-center space-x-2 bg-white border rounded-full px-4 py-2">
            <span className="text-lg">Contact Us</span>
            <IoIosSend className="text-2xl" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-between border-t pt-4">
        <div className="flex flex-wrap justify-center items-center space-x-4 mb-4 md:mb-0">
          <FooterIcon icon={<IoLocationSharp />} text={"Sri Lanka"} />
          <FooterIcon icon={<MdEmail />} text={"hello@wrenix.com"} />
          <FooterIcon icon={<FaPhone />} text={"070 332 4738"} />
          <FooterIcon icon={<TfiWorld />} text={"www.wrenix.com"} />
        </div>

        <div className="flex flex-wrap justify-center items-center space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <a href="#" className="hover:underline">
            Refund Policy
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        All Rights Reserved by Wrenix | ©Wrenix 2025
      </div>
    </footer>
  );
}
