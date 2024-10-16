"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BaseIcon } from "../base-icon/BaseIcon";
import HamburgerButton from "../hamburger-button/HamburgerButton";
import Menu from "./Menu";
import Link from "next/link";
import { unBounded } from "@/app/layout";

const Navbar = () => {
  const [hoveredPhone, setHoveredPhone] = useState<boolean>(false);
  const [isOpenBar, setBar] = useState<boolean>(false);

  return (
    <div>
      <div className="flex h-36 items-center justify-between px-4 py-8 lg:px-8 xl:px-16 2xl:px-32">
        <div className="z-20  xl:w-[340px]">
          <Link href={"/"} className="flex items-center gap-2">
            <Image alt="logo" src="/anySoft.svg" width={41} height={37} />
            <span className={`text-2xl font-semibold ${unBounded.className}`}>
              Anysoft
            </span>
          </Link>
        </div>

        <HamburgerButton isOpen={isOpenBar} setOpen={setBar} />
        <div className="z-20 hidden  lg:w-[340px] xl:block">
          <a
            onMouseEnter={() => setHoveredPhone(true)}
            onMouseLeave={() => setHoveredPhone(false)}
            href="tel:+998916225506"
            className="flex items-center"
          >
            <div
              className={`flex h-6 w-6 items-center justify-center duration-150 2xl:h-12 2xl:w-12 ${
                hoveredPhone ? "bg-red-500" : "bg-transparent"
              }`}
            >
              <BaseIcon name="phone" viewBox="0 0 24 24" className="h-6 w-6" />
            </div>
            <span
              className={`whitespace-nowrap p-2 pl-3 text-2xl font-semibold text-white duration-100 2xl:text-2xl ${
                hoveredPhone ? "bg-neutral-800" : "bg-transparent"
              } ${unBounded.className}`}
            >
              +99891 622 55 06
            </span>
          </a>
        </div>
      </div>
      <Menu isOpen={isOpenBar} setOpen={setBar} />
    </div>
  );
};

export default Navbar;
