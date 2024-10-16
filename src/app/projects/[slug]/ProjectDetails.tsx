import { unBounded } from "@/app/layout";
import Sending from "@/components/sending/Sending";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectDetailsProps = {
  name: string;
  brief: string;
  main_image: string;
  description: string;
  medias: string[];
};

const ProjectDetails = ({
  name,
  brief,
  main_image,
  description,
  medias,
}: ProjectDetailsProps) => {
  return (
    <div>
      <div className="relative h-[512px] w-full">
        <Image
          alt="project image"
          src={main_image}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute z-[5] h-full w-full bg-black opacity-50"></div>
        <div className="absolute z-[6] flex h-full w-full flex-col justify-center gap-6 px-4 lg:px-8 xl:px-16 2xl:px-32">
          <h2
            className={`text-2xl font-extrabold leading-[96px] tracking-wide xl:text-4xl 2xl:text-8xl ${unBounded.className}`}
          >
            {name.toUpperCase()}
          </h2>
          <p className="text-xl 2xl:w-1/2">{brief}</p>
        </div>
      </div>
      <div className="mx-auto mt-16 px-4 xl:mt-32 xl:w-1/2 xl:p-0">
        <h2
          className={`text-2xl font-medium text-zinc-700 xl:text-4xl ${unBounded.className}`}
        >
          Overall description
        </h2>
        <p className="mt-8 xl:text-xl">{description}</p>
      </div>
      <div className="mx-auto px-4 xl:w-1/2 xl:p-0">
        <h2
          className={`mt-8 text-2xl font-medium text-zinc-700 xl:text-4xl ${unBounded.className}`}
        >
          User Interface
        </h2>
        <div className="relative mt-8 h-[450px] w-full">
          <Image
            alt="project_image"
            src={medias[0]}
            fill
            className="cover w-full"
          />
        </div>
        <div className="relative mt-8 grid grid-cols-2 gap-6">
          {medias.slice(1).map((src, idx) => (
            <div className="relative col-span-1 h-56 w-full" key={idx}>
              <Image
                alt="project_image"
                src={src}
                fill
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Link href={"/contract"} className="mt-8 block lg:mt-32">
        <Sending text="Complete the Form" />
      </Link>
    </div>
  );
};

export default ProjectDetails;
