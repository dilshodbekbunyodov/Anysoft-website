"use client";

import Image from "next/image";
import React from "react";
import { BaseIcon } from "../base-icon/BaseIcon";
import FooterLink from "./FooterLink";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import FooterMap from "./FooterMap";
import { unBounded } from "@/app/layout";

const Footer = () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:pb-32 lg:pt-32 xl:px-16 2xl:px-32">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <Image alt="logo" src="/anySoft.svg" width={41} height={37} />
          <span className={`text-2xl font-medium ${unBounded.className}`}>
            Anysoft
          </span>
        </Link>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="flex items-center space-x-6"
        >
          <BaseIcon
            name="arrowBottom"
            viewBox="0, 0, 20, 20"
            className="h-5 w-5 rotate-180"
          />
          <span className="text-lg font-normal lg:text-2xl">Back to Top</span>
        </button>
      </div>
      <div className="mt-8 xl:flex xl:space-x-6">
        <div className="flex flex-1 flex-col justify-between ">
          <div>
            <FooterLink href="/projects" text="PROJECTS" />
            <FooterLink href="/about-us" text="ABOUT US" />
            <FooterLink href="/blogs" text="ARTICLES" />
          </div>
          <div className="hidden items-end space-x-6 xl:flex">
            <SocialMedia href="/" text="Linkedin" />
            <SocialMedia href="/" text="Facebook" />
            <SocialMedia href="/" text="Instagram" />
            <SocialMedia href="https://t.me/digitalgovuz" text="Telegram" />
          </div>
        </div>
        <div className="my-4 flex flex-1 flex-col xl:my-0">
          <FooterMap />
          <div className="flex h-20 items-center bg-neutral-800 px-6 xl:space-x-2">
            <BaseIcon name="marker" />
            <span className="text-xl">Oybek street, 22, Toshkent</span>
          </div>
        </div>
      </div>

      <div className="my-8 flex items-center justify-between xl:hidden">
        <SocialMedia href="/" text="Linkedin" />
        <SocialMedia href="/" text="Facebook" />
        <SocialMedia href="/" text="Instagram" />
        <SocialMedia href="https://t.me/digitalgovuz" text="Telegram" />
      </div>
    </div>
  );
};

export default Footer;
