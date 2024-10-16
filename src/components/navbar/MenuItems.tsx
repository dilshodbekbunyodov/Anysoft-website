import { unBounded } from "@/app/layout";
import Link from "next/link";
import { useRouter } from "next/navigation";

type MenuItemsProps = {
  text: string;
  href: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuItems = ({ text, href, setOpen }: MenuItemsProps) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    router.push(href);
  };

  return (
    <Link
      href={href}
      className={`text-3xl font-extrabold text-zinc-700 duration-150 hover:text-white lg:text-8xl ${unBounded.className}`}
      onClick={(e: any) => handleClick(e)}
    >
      {text}
    </Link>
  );
};

export default MenuItems;
