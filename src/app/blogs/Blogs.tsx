"use client";
import { BaseRadioGroup } from "@/components/base-radio/BaseRadioGroup";
import React, { useState } from "react";
import { blogTypeData, blogsData } from "./constants";
import BlogItem from "./BlogItem";

const Blogs = () => {
  const [blogType, setBlogType] = useState<string>("all");
  const blogs = Object.values(blogsData);
  const filteredItems =
    blogType === "all" ? blogs : blogs.filter((el) => el.type === blogType);
  return (
    <div>
      <div className="px-4 lg:px-8 xl:px-16 2xl:px-32">
        <BaseRadioGroup
          data={blogTypeData}
          selected={blogType}
          changeHandler={(type: string) => setBlogType(type)}
          groupName="blogs"
        />
        <div className="grid-cols-2 gap-x-6 gap-y-6 xl:grid">
          {filteredItems.map((item, i) => (
            <BlogItem
              key={i}
              href={item.href}
              media={item.templateMedia}
              name={item.name}
              brief={item.brief}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
