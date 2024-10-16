"use client";
import { useState } from "react";
import { BaseIcon } from "../base-icon/BaseIcon";
import Link from "next/link";

type ContentDataProps = {
  iconName:
    | "webIcon"
    | "softwareIcon"
    | "mobileIcon"
    | "graphDesignIcon"
    | "uxuiIcon"
    | "moutionIcon"
    | "itConsultingIcon"
    | "auditIcon"
    | "engineeringIcon";
  header: string;
  description: string;
  technologies: string[];
};

const ContentData = ({
  iconName,
  header,
  description,
  technologies,
}: ContentDataProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=""
    >
      <div className="flex items-center space-x-6">
        <div
          className={`flex h-16 w-16 items-center justify-center ${
            hovered ? "bg-red-50" : "bg-neutral-100"
          }`}
        >
          <BaseIcon
            name={iconName}
            className={`h-12 w-12  duration-300 ${
              hovered ? "text-red-500" : "text-neutral-900"
            }`}
            viewBox="0 0 48 48"
          />
        </div>
        <h2 className="text-xl font-semibold text-neutral-900 xl:text-3xl">
          {header}
        </h2>
      </div>
      <p className="mt-6 text-gray-600 lg:text-xl">{description}</p>
      <div className="mt-4 bg-neutral-100 p-4">
        <h3 className="font-bold text-gray-500">Technologies</h3>
        <p className="text-neutral-900">{technologies.join(", ")}</p>
      </div>
      <Link
        href={"/contract"}
        className={`my-4 flex items-center text-red-500 xl:mb-0 xl:mt-8 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        Let's talk about the project.
        <BaseIcon
          name="arrowTopOutline"
          className="h-6 w-6 rotate-90"
          viewBox="0 0 48 48"
        />
      </Link>
    </div>
  );
};

export default ContentData;
