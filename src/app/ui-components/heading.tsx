import React from "react";
import { cn } from "../lib/utils";

const Heading = ({
  children,
  size,
  className,
}: {
  children: React.ReactNode;
  size: "lg" | "md";
  className: string;
}) => {
  return (
    <h1
      className={cn(
        size === "lg"
          ? "text-black font-extrabold lg:text-[46px] md:text-[36px] sm:text-[28px] text-[24px]"
          : "text-black font-extrabold lg:text-[36px] md:text-[28px] sm:text-[24px] text-[20px]",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
