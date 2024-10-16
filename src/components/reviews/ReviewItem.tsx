import { unBounded } from "@/app/layout";
import Image from "next/image";
import React from "react";

type ReviewItemProps = {
  avatar: string;
  fullName: string;
  company: string;
  review: string;
};

const ReviewItem = ({ avatar, fullName, company, review }: ReviewItemProps) => {
  return (
    <div className="my-6 flex flex-col space-y-6">
      <div className="flex space-x-4">
        <div className="h-[72px] w-[72px] overflow-hidden rounded-full">
          <Image
            width={72}
            height={72}
            alt="avatar"
            src={avatar}
            className="h-[72px] w-[72px] object-cover"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-lg font-bold xl:text-2xl">{fullName}</span>
          <span className="text-gray-400 xl:text-xl">{company}</span>
        </div>
      </div>
      <div className="bg-neutral-800 p-4">
        <p className="text-sm xl:text-xl">{review}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
