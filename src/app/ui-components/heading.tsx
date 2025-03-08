import React from "react";

const Heading = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size: "lg" | "md";
}) => {
  return (
    <h1
      className={
        size === "lg"
          ? "text-black font-extrabold lg:text-[46px] md:text-[36px] sm:text-[28px] text-[24px]"
          : "text-black font-extrabold lg:text-[36px] md:text-[28px] sm:text-[24px] text-[20px]"
      }
    >
      {children}
    </h1>
  );
};

export default Heading;
