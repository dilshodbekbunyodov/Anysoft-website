"use client";
import { useEffect, useRef, useState } from "react";
import { AccordionContentProps } from "./types";

export const AccordionContent = ({
  active,
  id,
  children,
}: AccordionContentProps) => {
  const [height, setHeight] = useState(0);
  const elementRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight || 0);
    }
  }, [height]);

  return (
    <div
      style={{ height: active === id ? `${height + 20}px` : "0px" }}
      className="xl::flex overflow-hidden duration-700"
    >
      <div className="w-full">
        <div
          ref={elementRef}
          className="mt-5 xl:flex xl:flex-col xl:gap-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
