import React from "react";
import ServiceCard_left from "./ServiceCard_left";
import ServiceCard_right from "./ServiceCard_right";

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "We create unique websites with exceptional UI/UX design to captivate audiences. Our services include e-commerce solutions, intuitive CMS, SEO optimization, and reliable hosting with proactive maintenance, delivering complete web design and development solutions.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Our UI/UX design services create user-focused, visually striking, and intuitive interfaces that enhance engagement. From wire-frames to prototypes, we blend creativity with functionality to deliver seamless experiences that align with your brand and drive meaningful interactions.",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Our digital marketing services boost your online presence and deliver results. We specialize in social media marketing, SEO, brand strategy, content marketing, and PPC advertising to engage audiences, improve visibility, and drive high-converting traffic. Together, we craft impactful strategies tailored to your business needs.",
  },
  {
    id: 4,
    title: "Graphic Design",
    description:
      "Our graphic design services bring your brand to life with creative precision. From brand identity and logo design to packaging, illustrations, marketing materials, and social media graphics, we craft impactful designs that leave a lasting impression.",
  },
  {
    id: 5,
    title: "Mobile Application Development",
    description:
      "We offer custom mobile app solutions with cross-platform development, responsive design, and user-centric interfaces. By integrating cutting-edge technologies, we create intuitive, future-ready apps and provide end-to-end support from concept to launch.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex gap-[3rem] py-[3rem] pb-[5rem] w-screen justify-center items-center flex-col">
      {services.map((service) =>
        service.id % 2 === 0 ? (
          <ServiceCard_right
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
          />
        ) : (
          <ServiceCard_left
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
          />
        )
      )}
    </div>
  );
};

export default Services;
