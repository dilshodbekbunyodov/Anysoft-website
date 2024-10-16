import { unBounded } from "@/app/layout";
import { BaseIcon } from "@/components/base-icon/BaseIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectVIewItem = ({
  colSpan,
  href,
  name,
  brief,
  templateMedia,
}: {
  colSpan: string;
  href: string;
  name: string;
  brief: string;
  templateMedia: string;
}) => {
  return (
    <div className={`${colSpan} relative`}>
      <img
        className="h-[250px] w-full object-cover xl:h-[400px]"
        src={templateMedia}
        alt="project_image"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between p-6 opacity-0 duration-300 hover:bg-black hover:bg-opacity-70 hover:opacity-100">
        <Link
          href={href}
          className="self-end rounded-full bg-red-500 p-4 hover:opacity-80"
        >
          <BaseIcon
            name="arrowTopRight"
            viewBox="0 0 48 48"
            className="h-4 w-4 lg:h-12 lg:w-12"
          />
        </Link>
        <div>
          <p className={`font-semibold lg:text-4xl ${unBounded.className}`}>
            {name}
          </p>
          <span className=" hidden text-xl font-normal text-neutral-300  xl:block">
            {brief}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectVIewItem;
