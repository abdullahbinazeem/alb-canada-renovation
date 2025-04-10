import Image from "next/image";
import Heading from "./ui-components/heading";
import HeroSection from "./section-components/hero";
import TopBar from "./components/topbar";
import NavBar from "./components/navbar";
import Services from "./section-components/services";

export default function Home() {
  return (
    <div className="bg-white">
      <TopBar />
      <NavBar />
      <HeroSection />

      {/* Services Section */}
      <section className="container mx-auto py-16 px-4">
        <Heading size="md" className="text-center">
          Our Roof Repair & Install Services in Calgary,Canada
        </Heading>
        <Services />
      </section>
    </div>
  );
}
