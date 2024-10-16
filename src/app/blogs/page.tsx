import Link from "next/link";
import Blogs from "./Blogs";
import Sending from "@/components/sending/Sending";
import Footer from "@/components/footer/Footer";
import { unBounded } from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Articles",
  },
  keywords: ["mobil ilovalar", "CRM", "logo", "brending"],
};

const page = () => {
  return (
    <div>
      <h2
        className={`px-4 py-4 text-3xl font-extrabold leading-[96px] tracking-wide lg:px-8 xl:px-16 xl:text-4xl 2xl:px-32 2xl:py-24 2xl:text-8xl ${unBounded.className}`}
      >
        ARTICLES
      </h2>
      <Blogs />
      <Link href={"/contract"} className="mt-16 block xl:mt-32">
        <Sending text="Complete the Form" />
      </Link>
      <Footer />
    </div>
  );
};

export default page;
