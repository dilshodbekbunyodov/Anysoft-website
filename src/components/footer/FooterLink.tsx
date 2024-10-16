"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BaseIcon } from "../base-icon/BaseIcon";
import { unBounded } from "@/app/layout";

const FooterLink = ({ text, href }: { text: string; href: string }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={href}
      className="flex items-center justify-between border-b border-t border-white py-6"
    >
      <span
        className={`text-2xl font-bold duration-200 xl:text-4xl ${
          hovered ? "text-white" : "text-zinc-700"
        } ${unBounded.className}`}
      >
        {text}
      </span>
      <BaseIcon
        name="footerLinkIcon"
        className={`h-12 w-12 ${
          hovered ? "-translate-y-2 opacity-100" : "translate-y-0 opacity-0"
        } duration-200`}
        viewBox="0 0 48 48"
      />
    </Link>
  );
};

export default FooterLink;
