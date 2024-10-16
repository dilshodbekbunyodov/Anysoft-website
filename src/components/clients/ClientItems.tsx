import Image from "next/image";
import React from "react";

const ClientItems = ({ medias }: { medias: string[] }) => {
  return (
    <div className="mt-6 flex  items-center justify-between xl:mt-12 xl:space-x-8">
      {medias.map((href, idx) => (
        <Image
          key={idx}
          width={104}
          height={0}
          alt="hamkorlar"
          src={href}
          className="w-14 xl:w-28"
        />
      ))}
    </div>
  );
};

export default ClientItems;
