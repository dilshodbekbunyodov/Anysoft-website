import Link from "next/link";
import React from "react";
import ProjectVIewItem from "./ProjectVIewItem";
import { unBounded } from "@/app/layout";
import { projectDetailsData } from "@/app/projects/constants";

const ExampleProjects = () => {
  const gridElementColItems = [
    "col-span-4",
    "col-span-2",
    "col-span-3",
    "col-span-3",
  ];

  return (
    <div className="bg-white px-4 py-16 lg:px-8 lg:py-32 xl:px-16 2xl:px-32">
      <div
        className={`flex flex-wrap items-center justify-between gap-4 ${unBounded.className}`}
      >
        <p className="whitespace-nowrap text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-5xl">
          Our Projects
        </p>
        <p
          className="text-2xl font-semibold leading-[50px] tracking-widest sm:text-3xl lg:text-5xl lg:tracking-wide"
          style={{
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          }}
        >
          100+ Successful Projects
        </p>
      </div>
      <div className="mb-8 mt-12 gap-6 xl:grid xl:grid-cols-6">
        {Object.values(projectDetailsData)
          .slice(0, 4)
          .map((item, idx) => (
            <ProjectVIewItem
              key={item.id}
              colSpan={gridElementColItems[idx]}
              href={item.href}
              name={item.name}
              brief={item.brief}
              templateMedia={item.templateMedia}
            />
          ))}
      </div>
      <Link
        href={"/projects"}
        className="block border border-gray-400 py-5 text-center tracking-wide text-neutral-900 hover:opacity-80 hover:shadow"
      >
        All Projects
      </Link>
    </div>
  );
};

export default ExampleProjects;
