import React from "react";

const SocialMedia = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      href={href}
      className="font-normal leading-7 tracking-tight text-gray-400 duration-150 hover:text-white xl:text-xl"
    >
      {text}
    </a>
  );
};

export default SocialMedia;
