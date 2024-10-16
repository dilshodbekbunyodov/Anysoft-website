import React from "react";
import MenuItems from "./MenuItems";

type HamburgerButtonProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const Menu = ({ isOpen, setOpen }: HamburgerButtonProps) => {
  return (
    <div
      className={`absolute top-0 z-10 flex w-full flex-col items-center justify-center space-y-8 overflow-hidden bg-neutral-900 duration-300 lg:space-y-16 ${
        isOpen ? "h-screen" : "h-0"
      }`}
    >
      <MenuItems text="PROJECTS" href="/projects" setOpen={setOpen} />
      <MenuItems text="ABOUT US" href="/about-us" setOpen={setOpen} />
      <MenuItems text="ARTICLES" href="/blogs" setOpen={setOpen} />
    </div>
  );
};

export default Menu;
