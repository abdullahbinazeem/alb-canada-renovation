import { Phone } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Roofing-Services",
    href: "/roofing-services",
  },
  {
    name: "Projects Accomplished",
    href: "/projects-accomplished",
  },
  {
    name: "Other Services",
    url: "/other-services",
  },
];

export default function NavBar() {
  return (
    <div className="sticky top-0 z-[100] bg-[#191818] text-white">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Nav links */}
        <nav className="hidden lg:block">
          <ul className="flex uppercase sm:text-base text-sm ">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url || "/"}
                  key={index}
                  className="hover:underline underline-offset-4 decoration-red-500 transition-all mx-4 text-sm xl:text-base"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side call to action */}
        <div className="flex flex-col items-end text-sm">
          <span className="text-primary font-semibold underline">
            24h service:
          </span>
          <div className="flex items-center gap-3">
            <Phone size={20} />
            <span className="xl:text-lg">+1 (587) 581-6963</span>
          </div>
        </div>
      </div>
    </div>
  );
}
