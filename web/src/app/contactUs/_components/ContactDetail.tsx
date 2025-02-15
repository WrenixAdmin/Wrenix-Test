import React from "react";

import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";

interface ContactCardProps {
  title: string;
  data: string;
  icon: React.ReactNode;
}

interface SocialLinkProps {
    href: string,
    icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
    return (
        <Link
            href={href}
            className="flex justify-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
        >
            {icon}
        </Link>
    );
};

const ContactCard: React.FC<ContactCardProps> = ({ title, data, icon }) => {
  return (
    <div className="flex p-[1rem] justify-start items-center w-[80%] bg-[#415877] rounded-[0.625rem] gap-[1.5rem]">
      <div className="text-white text-[3.5rem]">{icon}</div>
      <div>
        <h4 className="text-white text-[1.5rem] font-medium">{title}</h4>
        <p className="text-white text-[1rem]">{data}</p>
      </div>
    </div>
  );
};

const ContactDetail: React.FC = () => {
  return (
    <div className="flex w-[45vw] p-[3rem] px-[2rem] flex-col items-center gap-[1.25rem] rounded-[1.8rem] bg-[#100E34]">
      <h3 className="text-white text-[2rem] font-medium leading-none">
        <span className="text-wrenixYellow">Hi!</span> We are always here to
        <br />
        <span className="text-wrenixYellow">help</span> you.
      </h3>
      <ContactCard
        title="Phone"
        data="+94775105532"
        icon={<FaPhoneSquareAlt />}
      />
      <ContactCard
        title="Phone"
        data="+94775105532"
        icon={<FaSquareWhatsapp />}
      />
      <ContactCard title="Email" data="hello@wrenix.com" icon={<MdEmail />} />

      <div className="bg-white h-[1px] w-full" />
      <p className="text-white text-[1rem]">Connect with us</p>
      <div className="flex justify-between w-[70%]">
        <SocialLink href="https://www.facebook.com" icon={<FaFacebook />} />
        <SocialLink href="https://www.instagram.com" icon={<FaInstagram />} />
        <SocialLink href="https://www.linkedin.com" icon={<FaLinkedin />} />
        <SocialLink href="https://www.youtube.com" icon={<FaYoutube />} />
        <SocialLink href="https://www.tiktok.com" icon={<FaTiktok />} />
      </div>
    </div>
  );
};

export default ContactDetail;
