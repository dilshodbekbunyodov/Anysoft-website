import Footer from "@/components/footer/Footer";
import Sending from "@/components/sending/Sending";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "About us",
  },
  keywords: [
    "rraqamli xizmarlar markazi",
    "web dasturlash",
    "dasturiy taʼminot",
    "mobil dasturlash",
    "grafik dizayn",
    "ux/ui dizayn",
    "moushn dizayn",
    "IT - konsalting",
    "IT - audit",
    "biznes jarayonlari reinjineringi",
  ],
};

const page = () => {
  return (
    <div>
      <h2 className="px-4 py-4 text-3xl  font-extrabold leading-[96px] tracking-wide lg:px-8 lg:text-4xl xl:px-16 2xl:px-32 2xl:text-8xl">
        ABOUT US
      </h2>
      <div className="mx-auto px-4 xl:w-1/2 xl:px-0">
        <p className="xl:text-xl">
          Welcome to Anysoft, where innovation meets excellence in IT solutions.
          As a leading provider, we specialize in delivering cutting-edge
          technology services to empower businesses of all sizes. From strategic
          IT consulting to seamless software development and robust
          infrastructure solutions, we are dedicated to driving digital
          transformation. With a commitment to quality, security, and client
          satisfaction, Anysoft is your trusted partner for navigating the
          ever-evolving landscape of IT excellence
        </p>
        <div className="relative mt-12 h-[450px] w-full">
          <Image
            alt="company_image"
            src="/projects_1.png"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <Link href={"/contract"} className="mt-16 block xl:mt-32">
        <Sending text="Complete the Form" />
      </Link>
      <Footer />
    </div>
  );
};

export default page;
