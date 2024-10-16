import { BaseIcon } from "@/components/base-icon/BaseIcon";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="h-[calc(100vh-144px)] flex items-center justify-center flex-col space-y-4">
      <p className="text-white text-8xl font-extrabold">
        4 <span className="text-red-500">0</span> 4
      </p>
      <p className="text-4xl font-semibold">Sahifa topilmadi!</p>
      <Link
        href={"/"}
        className="px-8 py-4 bg-red-500 flex items-center space-x-4 hover:opacity-80 duration-150"
      >
        <BaseIcon
          name="arrowRight"
          className="w-8 h-8 rotate-180"
          viewBox="0 0 32 32"
        />
        <span className="text-xl font-normal">Bosh sahifaga qaytish</span>
      </Link>
    </div>
  );
}
