import React from "react";
import Projects from "./Projects";
import Link from "next/link";
import Sending from "@/components/sending/Sending";
import Footer from "@/components/footer/Footer";
import { unBounded } from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Projects",
  },
  keywords: ["mobil ilovalar", "CRM", "logo", "brending"],
};

const page = () => {
  return (
    <div>
      <p
        className={`px-4 py-4 text-3xl font-extrabold tracking-wide lg:px-8 lg:text-4xl xl:px-16 xl:text-8xl xl:leading-[96px] 2xl:px-32 2xl:py-24 ${unBounded.className}`}
      >
        Projects
      </p>
      <Projects />
      <Link href={"/contract"} className="mt-16 block lg:mt-32">
        <Sending text="Complete the Form" />
      </Link>
      <Footer />
    </div>
  );
};

export default page;
