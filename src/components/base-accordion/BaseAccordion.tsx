"use client";
import { useState } from "react";
import { AccordionProps } from "./types";
import { AccordionContent } from "./AccordionContent";
import { unBounded } from "@/app/layout";

export const BaseAccordion = ({ data }: AccordionProps) => {
  const [active, setActive] = useState(0);

  const handleOpenAccordion = (activeShow: number) => {
    active === activeShow ? setActive(0) : setActive(activeShow);
  };

  return (
    <div>
      {data.map((item) => (
        <div
          onMouseEnter={() => handleOpenAccordion(item.id)}
          onMouseLeave={() => setActive(0)}
          key={item.id}
          className="border-b border-gray-400"
        >
          <p
            className={`py-8 text-xl font-medium duration-300 lg:text-4xl ${
              active === item.id ? "text-neutral-300" : "text-neutral-900"
            } ${unBounded.className}`}
          >
            {item.title}
          </p>
          <AccordionContent active={active} id={item.id}>
            {item.children}
          </AccordionContent>
        </div>
      ))}
    </div>
  );
};
