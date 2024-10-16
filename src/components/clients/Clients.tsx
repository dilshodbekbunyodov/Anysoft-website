import Image from "next/image";
import React from "react";
import ClientItems from "./ClientItems";
import { unBounded } from "@/app/layout";

const Clients = () => {
  return (
    <div className=" px-4 py-8 lg:px-8 lg:pt-32 xl:px-16 xl:pb-16 2xl:px-32">
      <div
        className={`flex flex-wrap items-center justify-between ${unBounded.className}`}
      >
        <p className="my-2 whitespace-nowrap text-3xl font-semibold text-white md:m-0 xl:text-6xl">
          Our Clients
        </p>
        <p
          className="my-2  text-3xl font-semibold tracking-widest text-neutral-900 md:m-0 lg:tracking-wide xl:text-6xl "
          style={{
            textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
          }}
        >
          100+ Successful Projects
        </p>
      </div>
      <div
        className={`mt-8 text-2xl font-extrabold text-zinc-700 xl:mt-16 xl:text-4xl ${unBounded.className}`}
      >
        Partners
      </div>
      <ClientItems
        medias={["/hamkorbank.png", "/joyda.png", "/olx.png", "/uzum.png"]}
      />
    </div>
  );
};

export default Clients;
