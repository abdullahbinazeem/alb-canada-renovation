import { Clock, LocateIcon, Phone } from "lucide-react";
import React from "react";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className="bg-black text-white text-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-4 ">
        {/* Left side items */}
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:flex hidden">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+1 (587) 581-6963</span>
          </div>
          <div className="flex items-center gap-1">
            <LocateIcon size={16} />
            <span>101 Sienna Park Terrace SW, Calgary, AB T3H 3L3, Canada</span>
          </div>
        </div>
        {/* Right side items */}
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <Clock size={16} />
          <span>Monday - Sunday 24H</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
