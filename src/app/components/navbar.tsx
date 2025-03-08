import Link from "next/link";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-[100] bg-[#191818] text-white">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Nav links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 uppercase sm:text-base text-sm font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/roofing-services">Roofing Services</Link>
            </li>
            <li>
              <Link href="/projects-accomplished">Projects Accomplished</Link>
            </li>
            <li>
              <Link href="/other-services">Other Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Right side call to action */}
        <div className="flex flex-col items-end text-sm">
          <span className="text-yellow-400 font-semibold">24h service:</span>
          <span>+1 (587) 581-6963</span>
        </div>
      </div>
    </div>
  );
}
