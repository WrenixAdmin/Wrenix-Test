import React from "react";
import ContactForm from "./ContactForm";
import ContactDetail from "./ContactDetail";

const ContactSection: React.FC = () => {
  return (
    <div className="flex w-[70vw] m-auto min-h-screen items-center justify-between gap-[10rem]">
      <ContactForm />
      <ContactDetail />
    </div>
  );
};

export default ContactSection;
