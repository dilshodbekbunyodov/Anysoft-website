import React from "react";
import { blogsData } from "../constants";
import Image from "next/image";
import Link from "next/link";
import Sending from "@/components/sending/Sending";
import NotFound from "@/app/not-found";
import Footer from "@/components/footer/Footer";

const page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const availableParams = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
  ];

  const blogData = (blogsData as any)[slug];

  return availableParams.includes(slug) ? (
    <div className="mt-8 xl:mt-24">
      <div className="mx-auto px-4 lg:px-8 xl:px-16 2xl:w-1/2">
        <div className="border-b border-gray-400 pb-4">
          <h2 className="text-2xl font-semibold xl:text-4xl">
            {blogData.name}
          </h2>
          <div className="mt-2 flex items-center justify-between text-gray-400 xl:text-xl">
            <span>{blogData.readTime}-minute read</span>
            <span>{blogData.date}</span>
          </div>
        </div>
        <div>
          <p className="mt-4">{blogData.description}</p>
          <div className="relative my-12 h-[450px]">
            <Image
              alt="blog_image"
              src={blogData.media}
              fill
              className="object-cover"
            />
          </div>
          <p>{blogData.secondDescription}</p>
        </div>
      </div>
      <Link href={"/contract"} className="mt-16 block xl:mt-32">
        <Sending text="Complete the Form" />
      </Link>
      <Footer />
    </div>
  ) : (
    <NotFound />
  );
};

export default page;
