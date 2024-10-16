"use client";
import React, { useState } from "react";
import { BaseIcon } from "../base-icon/BaseIcon";
import { unBounded } from "@/app/layout";

const Sending = ({ text }: { text: string }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-between bg-neutral-800 px-4 py-8 text-white duration-300 hover:bg-white hover:text-neutral-800 lg:px-8 lg:py-16 xl:space-x-16 xl:px-16 2xl:px-32"
    >
      <span
        className={`font-medium tracking-wide sm:text-3xl  xl:font-extrabold 2xl:text-7xl ${unBounded.className}`}
      >
        {text}
      </span>
      <BaseIcon
        name="contractLinkArrowOutline"
        viewBox="0 0 110 72"
        className={`h-6 w-6 duration-100 sm:h-10 sm:w-10 xl:h-16 xl:w-16 2xl:h-[72px] 2xl:w-[110px] ${
          hovered ? "translate-x-5" : ""
        }`}
      />
    </div>
  );
};

export default Sending;
