import React from "react";
import { BaseAccordion } from "../base-accordion/BaseAccordion";
import { AccordionData } from "../base-accordion/constants";
import { unBounded } from "@/app/layout";

const Services = () => {
  return (
    <div
      className="bg-white px-4 py-8 lg:px-8 lg:pb-32 xl:px-16 2xl:px-32"
      id="services"
    >
      <h1
        className={`border-b border-gray-400 pb-8 text-2xl font-semibold text-neutral-900 lg:text-[56px] ${unBounded.className}`}
      >
        Our Services
      </h1>
      <BaseAccordion data={AccordionData} />
    </div>
  );
};

export default Services;
