import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogItemProps = {
  media: string;
  name: string;
  brief: string;
  href: string;
};

const BlogItem = ({ media, name, brief, href }: BlogItemProps) => {
  return (
    <Link href={href}>
      <div className="relative mt-8 h-[450px] w-full">
        <Image alt="blog_image" src={media} fill className="cover" />
      </div>
      <div className="mt-6 flex flex-col space-y-6">
        <h3 className="text-2xl xl:text-4xl">{name}</h3>
        <p className="text-gray-400 xl:text-xl">{brief}</p>
      </div>
    </Link>
  );
};

export default BlogItem;
