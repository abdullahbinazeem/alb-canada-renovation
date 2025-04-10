import React from "react";
import { ArrowRight, Icon, Wrench } from "lucide-react";

const services = [
  {
    title: "Skylight",
    description:
      "For skylight repair and installation services in the Calgary areas, we offer expertise in addressing issues with existing skylights or installing new ones. Skylight repair involves fixing leaks, replacing damaged seals, or repairing any structural components.",
    img: "skylight.jpg", // Replace with actual image
    icon: Wrench, // Replace with actual icon
    link: "/",
  },
  {
    title: "Chimney",
    description:
      "For chimney repair and installation services in the Calgary areas, we specialize in maintaining the safety and functionality of existing chimneys or installing new ones. Chimney repair services may include fixing structural issues, addressing mortar deterioration, or repairing damaged flue liners.",
    img: "chimney.jpeg", // Replace with actual image
    icon: Wrench, // Replace with actual icon
    link: "/",
  },
  {
    title: "Siding",
    description:
      "For siding repair and installation services in the Calgary areas, we specialize in enhancing the exterior aesthetics and protection of your property. Siding repair services involve fixing damaged or warped panels, addressing issues like rot or mold, and ensuring the structural integrity of the siding.",
    img: "siding.jpeg", // Replace with actual image
    icon: Wrench, // Replace with actual icon
    link: "/",
  },
  {
    title: "Deck",
    description:
      "For siding repair and installation services in the Calgary areas, we specialize in enhancing the exterior aesthetics and protection of your property. Siding repair services involve fixing damaged or warped panels, addressing issues like rot or mold, and ensuring the structural integrity of the siding.",
    img: "Deck.jpg", // Replace with actual image
    icon: Wrench, // Replace with actual icon
    link: "/",
  },
  {
    title: "Gutter",
    description:
      "For siding repair and installation services in the Calgary areas, we specialize in enhancing the exterior aesthetics and protection of your property. Siding repair services involve fixing damaged or warped panels, addressing issues like rot or mold, and ensuring the structural integrity of the siding.",
    img: "gutters.jpg", // Replace with actual image
    icon: Wrench, // Replace with actual icon
    link: "/",
  },
  {
    title: "Roof Repairs",
    description:
      "For siding repair and installation services in the Calgary areas, we specialize in enhancing the exterior aesthetics and protection of your property. Siding repair services involve fixing damaged or warped panels, addressing issues like rot or mold, and ensuring the structural integrity of the siding.",
    img: "roofing-shigles.jpeg", // Replace with actual image
    icon: Wrench, // Replace with actual icon
    link: "/",
  },
];

const ServiceCard = ({
  title,
  description,
  img,
  icon: Icon,
  link,
}: {
  title: string;
  description: string;
  img: string;
  icon: React.ElementType;
  link: string;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden  text-black mx-auto">
      <div className="relative w-full">
        <img
          src={"assets/Services/" + img}
          alt={title}
          className="w-full aspect-[4/3] max-h-[400px] object-cover"
        />

        <div className="absolute -bottom-5 left-5 bg-primary p-3 rounded-full">
          <Icon size={32} stroke="white" strokeWidth={2} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="lg:text-2xl md:text-xl text-lg font-semibold mt-4 mb-2">
          {title}
        </h3>
        <p className="text-black opacity-70">{description}</p>
        <a
          href={link}
          className="group text-black font-medium transition-all text-primary-hover mt-4 cursor-pointer flex items-center gap-2"
        >
          READ MORE{" "}
          <ArrowRight className="group-hover:ml-2 transition-all" size={20} />
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="mx-auto px-8 lg:px-20 py-10 grid lg:grid-cols-3 md:grid-cols-2 gap-16 gap-y-20">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Services;
