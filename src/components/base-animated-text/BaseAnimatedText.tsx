"use client";
import React, { useState } from "react";

const BaseAnimatedText = ({ text }: { text: string }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div className="relative mr-80 cursor-pointer w-max">
      <p
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="z-20"
      >
        {text}
      </p>
      <p
        style={{
          textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
        }}
        className={`absolute bottom-1 right-1 -z-10 duration-200 ${
          hovered ? "text-red-500" : "text-neutral-900"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default BaseAnimatedText;
