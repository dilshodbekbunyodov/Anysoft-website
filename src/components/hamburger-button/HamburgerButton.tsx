"use client";

type HamburgerButtonProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const HamburgerButton = ({ isOpen, setOpen }: HamburgerButtonProps) => {
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <div className="z-20">
      <button
        className="flex h-12 w-12 flex-col items-center justify-center rounded duration-300 hover:opacity-80"
        onClick={() => setOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "translate-y-3 rotate-45 " : ""
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "-translate-y-3 -rotate-45 " : ""
          }`}
        />
      </button>
    </div>
  );
};

export default HamburgerButton;
