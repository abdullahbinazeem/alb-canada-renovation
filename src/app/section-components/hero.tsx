import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <video
          src="/assets/hero2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-[2]">
        <p className="uppercase tracking-widest sm:text-sm text-xs">
          Construction Solutions in Victoria
        </p>
        <h1 className="mt-2 lg:text-5xl font-bold  sm:text-4xl text-3xl">
          Best Roofing Services & Consulting <br className="md:block hidden" />{" "}
          in Victoria, BC
        </h1>
        <p className="mt-4 sm:text-sm text-xs">
          Roofing, Chimney, Skylight, Gutter, Flat Roof, Siding, Deck, Masonry,
          and More.
        </p>
        <button className="mt-6 bg-primary  text-white font-bold py-4 px-6 rounded-xs hover:bg-[#ff0008] hover:scale-105 transition-all cursor-pointer">
          REQUEST FREE ESTIMATE
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
