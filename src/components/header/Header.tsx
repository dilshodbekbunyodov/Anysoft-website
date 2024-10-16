import React from "react";
import dynamic from "next/dynamic";
import { unBounded } from "@/app/layout";
import Link from "next/link";

const LazyVideo = dynamic(() => import("./Video"));

const Header = () => {
  return (
    <div id="header" className="-z-20 h-screen">
      <div className="absolute z-[5] flex  h-screen w-full flex-col items-center justify-center gap-6">
        <p
          className={`max-w-5xl text-center text-3xl font-semibold lg:text-6xl ${unBounded.className}`}
        >
          We present a range of digital solutions to meet your needs.
        </p>
        <p className="max-w-5xl text-center font-medium lg:text-xl">
          "Discover tailored digital solutions for enhanced online presence.
          From advanced web development to strategic marketing, we've got your
          digital needs covered."
        </p>
        <Link
          href={"/contract"}
          className="mt-6 w-max bg-orange-500 px-10 py-5"
        >
          Complete the Form
        </Link>
      </div>
      <LazyVideo />
    </div>
  );
};

export default Header;
