import Image from "next/image";
import Heading from "./ui-components/heading";
import HeroSection from "./section-components/hero";
import TopBar from "./components/topbar";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <TopBar />
      <NavBar />
      <HeroSection />

      {/* Services Section */}
      <section className="container mx-auto py-16 px-4">
        <Heading size="md">
          Our Roof Repair & Install Services in Calgary,Canada
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/service1.jpg"
              alt="Skylight Installation"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Skylight Installation</h3>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/service2.jpg"
              alt="Chimney Repair"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Chimney Repair</h3>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/service3.jpg"
              alt="Siding Installation"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Siding Installation</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
